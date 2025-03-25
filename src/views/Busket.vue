<template>
  <section class="busket">
    <div class="container">
      <div class="busket__cards" v-if="user.busket.length > 0">
        <div v-for="(card,index) in datas" :key="index" class="busket__cards__card">
          <div class="busket__cards__card__container">
            <div class="busket__cards__card__container__image">
              <img v-if="card.image" class="busket__cards__card__container__image-img" :src="card.image" :alt="card.name">
            </div>
            <div class="busket__cards__card__container__text-n-delete">
              <div class="busket__cards__card__container__text">
                <div class="busket__cards__card__container__text__information">
                  <h2 class="busket__cards__card__container__text__information-title">{{ card.name }}</h2>
                  <p class="busket__cards__card__container__text__information-description">Код Товара: {{ card.itemCode }}</p>
                  <div class="busket__cards__card__container__text__information__price" v-if="card.discount">
                    <h2 class="busket__cards__card__container__text__information__price-title">{{ card.discountPrice }} ₸</h2>
                    <h3 class="busket__cards__card__container__text__information__price-description">{{ card.price }} ₸</h3>
                  </div>
                  <div class="busket__cards__card__container__text__information__price" v-if="!card.discount">
                    <h2 class="busket__cards__card__container__text__information__price-title">{{ card.price }} ₸</h2>
                  </div>
                </div>
                <button class="busket__cards__card__container__text-btn"><router-link :to="{ path: `/busket/buying/${card.id}`}">Оформить заказ</router-link></button>
              </div>
              <div class="busket__cards__card__container__delete" @click="toDelete(card.id)">
                <img class="busket__cards__card__container__delete-img" src="/images/busket/delete 1.svg" alt="delete">
                <h3 class="busket__cards__card__container__delete-text">Удалить с корзины</h3>
              </div>
            </div>
          </div>
          <div v-if="index !== datas.length - 1" class="popular__line busket__cards__card__line"></div>
        </div>
      </div>
      <div class="busket__empty" v-if="user.busket.length == 0">
        <h1 class="busket__empty-title">Корзина пуста</h1>
        <h3 class="busket__empty-description">P.S: Или просто обнови Страницу</h3>
      </div>
    </div>
    <div v-if="modalVisible" class="modal" :style="{ backgroundColor: title == 'succes' ? '#026d4e' : '#D9534F' }">
      <div class="modal__container">
        <h2 class="modal__container-title">{{ modalTitle }}</h2>
        <p class="modal__container-description">{{ modalDescription }}</p>
        <button class="modal__container-btn" @click="toCloseModal">Закрыть</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref,onMounted,computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const datas = ref([])
const users = ref([])

let user = JSON.parse(localStorage.getItem('user'))

const modalVisible = ref(false)
const modalTitle = ref('')
const modalDescription = ref('')

const toOpenModal=(title,desc)=>{
  modalTitle.value = title
  modalDescription.value = desc
  modalVisible.value = true
  setTimeout(() => {
    toCloseModal()
  }, 5000);
}
const toCloseModal=()=>{
  modalVisible.value = false
}

const getUsers =async()=>{
  const api = import.meta.env.VITE_USER_API_URL
  const resp = await axios.get(api)
  users.value = resp.data
}
const getData =()=>{
  console.log(user.busket);
  datas.value = user.busket
}
const toDelete=async(id)=>{
  let user = JSON.parse(localStorage.getItem('user'))
  if(user.busket.length !== 0){
    user.busket = user.busket.filter((card) => card.id !== id)
    const api = import.meta.env.VITE_USER_API_URL
    // const resp = await axios.delete(`${api}/${user.id}/busket/${id}`)
    const resp = await axios.put(`${api}/${user.id}`,{
      busket: user.busket
    })
    console.log(resp);
    localStorage.setItem('user',JSON.stringify(user))
    datas.value = user.busket
  }
}

onMounted(()=>{
  // toOpenModal('Error',"сначала авторизуйтесь")
  getData()
  setTimeout(() => {
    getUsers()
  }, 2000);
  if(!user){
    toOpenModal('Error',"сначала авторизуйтесь")
    router.push('/account')
  }
})
</script>

<style scoped>

</style>