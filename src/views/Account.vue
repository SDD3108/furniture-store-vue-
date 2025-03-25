<template>
  <div class="account">
    <div class="container account__container">
      <section class="registration">
        <div class="registration__text">
          <h2 class="registration__text-title">Регистрация</h2>
        </div>
        <div class="registration__container">
          <div class="registration__container__fio">
            <div class="registration__container__fio__name">
                <h3 class="registration__container-text">Имя</h3>
                <input class="registration__container__fio-input" v-model="name" placeholder="Имя" />
            </div>
            <div class="registration__container__fio__surname">
                <h3 class="registration__container-text">Фамилия</h3>
                <input class="registration__container__fio-input" v-model="surname" placeholder="Фамилия" />
            </div>
          </div>
          <div class="registration__container__email">
            <h3 class="registration__container-text">Email</h3>
            <input class="registration__container-input" v-model="email" placeholder="Email" />
          </div>
          <div class="registration__container__password">
            <h3 class="registration__container-text">Пароль</h3>
            <div class="login__container__password__input">
                <input class="login__container-input" v-model="password" :type="this.type ? 'text' : 'password'" placeholder="Пароль" />
                <img v-if="this.type" @click="toType" class="login__container__password__input-img" src="/images/reglog/hide.png" alt="hide">
                <img v-if="!this.type" @click="toType" class="login__container__password__input-img" src="/images/reglog/view.png" alt="hide">
            </div>
          </div>
          <button class="registration__container-btn" @click="toRegister"><router-link>Зарегистрироваться</router-link></button>
        </div>
      </section>
      <div class="account__line"></div>
      <section class="login">
        <div class="login__text">
          <h2 class="login__text-title">Вход</h2>
        </div>
        <div class="login__container">
          <div class="login__container__surname">
            <h3 class="login__container-text">Фамилия</h3>
            <input class="login__container-input" v-model="loginSurname" placeholder="Фамилия" />
          </div>
          <div class="login__container__email">
            <h3 class="login__container-text">Email</h3>
            <input class="login__container-input" v-model="loginEmail" placeholder="Email" />
          </div>
          <div class="login__container__password">
            <h3 class="login__container-text">Пароль</h3>
            <div class="login__container__password__input">
              <input class="login__container-input" v-model="loginPassword" :type="this.typeLogin ? 'text' : 'password'" placeholder="Пароль" />
              <img v-if="this.typeLogin" @click="toTypeLogin" class="login__container__password__input-img" src="/images/reglog/hide.png" alt="hide">
              <img v-if="!this.typeLogin" @click="toTypeLogin" class="login__container__password__input-img" src="/images/reglog/view.png" alt="hide">
            </div> 
          </div>
          <router-link to="/"><button class="login__container-btn" @click="toLogin"><router-link to="/">Войти</router-link></button></router-link>
        </div>
      </section>
      <div v-if="modalVisible" class="modal" :style="{ backgroundColor: title == 'succes' ? '#026d4e' : '#D9534F' }">
        <div class="modal__container">
          <h2 class="modal__container-title">{{ modalTitle }}</h2>
          <p class="modal__container-description">{{ modalDescription }}</p>
          <button class="modal__container-btn" @click="toCloseModal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import { toRaw } from 'vue';

export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      loginSurname:'',
      loginEmail: '',
      loginPassword: '',
      type: false,
      typeLogin: false,
      usersApi:import.meta.env.VITE_USER_API_URL,
      user:JSON.parse(localStorage.getItem('user')),
      modalVisible: false,
      modalTitle:'',
      modalDescription: '',
    };
  },
  computed: {
  },
  methods: {
    toOpenModal(title,desc){
      this.modalTitle = title
      this.modalDescription = desc
      this.modalVisible = true
      setTimeout(() => {
        this.toCloseModal()
      }, 5000);
    },
    toCloseModal(){
      this.modalVisible = false
    },
    async toRegister(){
      const users = await axios.get(this.usersApi)
      const existingUser = users.data.find((u) => u.email == this.email || u.password == this.password)
      if(this.name == ''){
        this.toOpenModal('Error','сначала заполни поле "имя"')
        return
      }
      else if(this.surname == ''){
        this.toOpenModal('Error','сначала заполни поле "фамилия"')
        return
      }
      else if(existingUser){
        this.toOpenModal('Error','этот email уже занят!')
        return
      }
      else if(!this.toCheckingEmail(this.email)){
        this.toOpenModal('Error','пароль должен быть минимум 8 символов, должен содержать "@" и "."')
        return
      }
      else if(!this.toCheckingPassword(this.password)){
        this.toOpenModal('Error','пароль должен быть минимум 8 символов, 1 цифра, 1 строчная и 1 заглавная буква')
        return
      }
      const resp = await axios.post(this.usersApi,{
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        busket: [],
        recentlyViewed: [],
        orders: [],
        locate: '',
        mailIndex: '',
        address: '',
        phone: ''
      })
      this.showModal('succes','✅ Регистрация успешна!')
      console.log(resp.data);
      this.name = ''
      this.surname=''
      this.email=''
      this.password=''
    },
    async toLogin(){
      const response = await axios.get(this.usersApi)
      const users = response.data
      const user = users.find(u => u.surname == this.loginSurname && u.email == this.loginEmail && u.password == this.loginPassword)
      if(user){
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
        this.showModal('succes','✅ Вход успешен!')
      } 
      else{
        this.toOpenModal('пользователь не сущетсвует или данные не верные')
      }
      this.loginSurname = ''
      this.loginEmail = ''
      this.loginPassword = ''
    },
    toType(){
      this.type = !this.type
    },
    toTypeLogin(){
      this.typeLogin = !this.typeLogin
    },
    toCheckingEmail(email){
      const normEmail = email.length >= 8 && /\S+@\S+\.\S+/.test(email)
      return normEmail
    },
    toCheckingPassword(password){
      const normPassword = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
      return normPassword
    },
  },
  created(){

  }
}
</script>
  
<style scoped>
</style>
  