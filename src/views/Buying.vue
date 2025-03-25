<template>
    <section class="buying">
      <div class="container buying__container">
        <div class="buying__container__info">
          <div class="buying__container__info__order">
            <div class="buying__container__info__order__buyer">
              <div class="buying__container__info__order__buyer__text">
                <h2 class="buying__container__info__order__buyer__text-title">Покупатель и регион</h2>
                <h3 class="buying__container__info__order__buyer__text-description">Тип плательщика</h3>
              </div>
              <div class="buying__container__info__order__buyer__faces">
                <div class="buying__container__info__order__buyer__faces__container">
                  <div class="buying__container__info__order__buyer__faces__container-input" @click="setFaceIndex(0)" :class="{active: faceIndex == 0}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                  <h3 class="buying__container__info__order__buyer__faces__container-title">Физическое лицо</h3>
                </div>
                <div class="buying__container__info__order__buyer__faces__container">
                  <div class="buying__container__info__order__buyer__faces__container-input" @click="setFaceIndex(1)" :class="{active: faceIndex == 1}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                  <h3 class="buying__container__info__order__buyer__faces__container-title">Юридическое лицо</h3>
                </div>
              </div>
              <h3 class="buying__container__info__order__buyer__text-description">Местоположение</h3>
              <div class="buying__container__info__order__buyer__input" v-if="user || card">
                <input class="buying__container__info__order__buyer-input" type="text" :value="user.locate" placeholder="Астана, Астана, Казахстан">
                <img class="buying__container__info__order__buyer__input-img" src="/images/buying/search.svg" alt="">
              </div>
              <div class="buying__container__info__order__buyer__index">
                <h3 class="buying__container__info__order__buyer__index-title">Индекс</h3>
                <input type="text" class="buying__container__info__order__buyer__index-input" :value="user.mailIndex" placeholder="101000">
              </div>
              <h3 class="buying__container__info__order__buyer-instruction">Выберите свой город в списке. Если вы не нашли свой город выберите “другое местоположение”. а город впишите в поле “Город”</h3>
            </div>
            <div class="buying__container__info__order__payment">
              <div class="buying__container__info__order__payment__delivery">
                <div class="buying__container__info__order__payment__delivery__text">
                  <div class="buying__container__info__order__payment__delivery__text-title">Доставка</div>
                  <div class="buying__container__info__order__payment__delivery__text-description">Выберите способ доставки</div>
                </div>
                <div class="buying__container__info__order__buyer__faces">
                  <div class="buying__container__info__order__buyer__faces__container">
                    <div class="buying__container__info__order__buyer__faces__container-input" @click="setDeliveryIndex(0)" :class="{active: deliveryIndex == 0}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                    <h3 class="buying__container__info__order__buyer__faces__container-title">Служба доставка</h3>
                  </div>
                  <div class="buying__container__info__order__buyer__faces__container">
                    <div class="buying__container__info__order__buyer__faces__container-input" @click="setDeliveryIndex(1)" :class="{active: deliveryIndex == 1}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                    <h3 class="buying__container__info__order__buyer__faces__container-title">Самовывоз</h3>
                  </div>
                </div>
              </div>
              <div class="buying__container__info__order__payment__payment">
                <div class="buying__container__info__order__payment__payment__text">
                  <div class="buying__container__info__order__payment__delivery__text-title">Оплата</div>
                  <div class="buying__container__info__order__payment__delivery__text-description">Выберите способ оплаты</div>
                </div>
                <div class="buying__container__info__order__buyer__faces">
                  <div class="buying__container__info__order__buyer__faces__container">
                    <div class="buying__container__info__order__buyer__faces__container-input" @click="setPaymentIndex(0)" :class="{active: paymentIndex == 0}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                    <h3 class="buying__container__info__order__buyer__faces__container-title">Картой</h3>
                  </div>
                  <div class="buying__container__info__order__buyer__faces__container">
                    <div class="buying__container__info__order__buyer__faces__container-input" @click="setPaymentIndex(1)" :class="{active: paymentIndex == 1}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                    <h3 class="buying__container__info__order__buyer__faces__container-title">Наличными</h3>
                  </div>
                  <div class="buying__container__info__order__buyer__faces__container">
                    <div class="buying__container__info__order__buyer__faces__container-input" @click="setPaymentIndex(2)" :class="{active: paymentIndex == 2}"><div class="buying__container__info__order__buyer__faces__container-input-point"></div></div>
                    <h3 class="buying__container__info__order__buyer__faces__container-title">Удаленная оплата</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buying__container__info__user">
            <div class="buying__container__info__user__fio">
              <div class="buying__container__info__user__fio__name">
                <h3 class="buying__container__info__user-title">Имя</h3>
                <input type="text" placeholder="Имя" :value="user.name" class="buying__container__info__user__fio-input">
              </div>
              <div class="buying__container__info__user__fio__surname">
                <h3 class="buying__container__info__user-title">Фамилия</h3>
                <input type="text" placeholder="Фамилия" :value="user.surname" class="buying__container__info__user__fio-input">
              </div>
            </div>
            <div class="buying__container__info__user__email">
              <h3 class="buying__container__info__user-title">Email</h3>
              <input type="text" class="buying__container__info__user-input" :value="user.email" placeholder="sadvakasov.rakhat@gmail.com">
            </div>
            <div class="buying__container__info__user__phone">
              <h3 class="buying__container__info__user-title">Телефон</h3>
              <input type="text" class="buying__container__info__user-input" :value="user.phone" placeholder="+7 (775)630 64-01">
            </div>
            <div class="buying__container__info__user__addres">
              <h3 class="buying__container__info__user-title buying__container__info__user__addres-title">Адрес доставки</h3>
              <div class="buying__container__info__user__addres__input">
                <input class="buying__container__info__user__addres__input-input" :value="user.address" type="text" placeholder="Астана, Астана, Казахстан">
                <img class="buying__container__info__user__addres__input-img" src="/images/buying/search.svg" alt="search">
              </div>
            </div>
            <div class="buying__container__info__user__description">
              <h3 class="buying__container__info__user-title">Описание</h3>
              <textarea class="buying__container__info__user__description-textarea" placeholder="Напишите о себе"></textarea>
            </div>
          </div>
        </div>
        <div class="buying__container__counter" v-if="card">
          <div class="buying__container__counter__change">
            <h2 class="buying__container__counter__change-title">Ваш заказ</h2>
            <button class="buying__container__counter__change-btn"><router-link to="/busket">Изменить</router-link></button>
          </div>
          <div class="buying__container__counter__score">
            <div class="buying__container__counter__score__product">
              <div class="buying__container__counter__score__product__text">
                <h2 class="buying__container__counter__score__product__text-title">{{card.name}}</h2>
                <h3 class="buying__container__counter__score__product__text-description">Код Товара: {{card.itemCode}}</h3>
              </div>
              <h3 class="buying__container__counter__score__product-price">{{ card.price }}₸</h3>
            </div>
            <div class="buying__container__counter__score__nds">
              <div class="buying__container__counter__score__container">
                <h2 class="buying__container__counter__score__title">НДС (12%, включен в цену):</h2>
                <h3 class="buying__container__counter__score__description">{{ (card.price * 12) / 100 }}₸</h3>
              </div>
              <div class="popular__line buying__container__counter__score__nds__line"></div>
            </div>
            <div class="buying__container__counter__score__delivery">
              <div class="buying__container__counter__score__container">
                <h2 class="buying__container__counter__score__title">Доставка</h2>
                <h3 v-if="delivery" class="buying__container__counter__score__description">3000₸</h3>
                <h3 v-if="!delivery" class="buying__container__counter__score__description">0₸</h3>
              </div>
              <div class="popular__line buying__container__counter__score__delivery__line"></div>
            </div>
            <div class="buying__container__counter__score__total">
              <h2 class="buying__container__counter__score__total-title">Итого:</h2>
              <h2 class="buying__container__counter__score__total-description">{{ Number(card.price) + 3000 }}₸</h2>
            </div>
          </div>
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
import { ref,onMounted,computed,toRaw } from 'vue';
import axios from 'axios';
import { useRouter,useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const delivery = ref(true)

const faceIndex = ref(0)
const deliveryIndex = ref(0)
const paymentIndex = ref(0)

const cardId = parseInt(route.params.id)
const card = ref({})
const datas = ref([])

const user = JSON.parse(localStorage.getItem('user')) 

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

const setFaceIndex =(index)=>{
  faceIndex.value = index
}
const setDeliveryIndex =(index)=>{
  deliveryIndex.value = index
  delivery.value = !delivery.value
}
const setPaymentIndex = (index)=>{
  paymentIndex.value = index
}
const getData =async()=>{
  const api = import.meta.env.VITE_API_URL
  const resp = await axios.get(api)
  datas.value = resp.data
  console.log(resp.data);
  card.value = datas.value.find(item => item.id == cardId)
  console.log(toRaw(card.value));
}

onMounted(()=>{
  // toOpenModal('Error',"сначала авторизуйтесь")
  if(!user){
    toOpenModal('Error',"сначала авторизуйтесь")
    router.push('/account')
  }
  setTimeout(() => {
    getData()
  }, 2000);
})
</script>

<style scoped>

</style>