<template>
  <div>
    <section class="card">
        <div class="container">
            <div class="card__container">
                <div class="card__container__image" v-if="card">
                    <img v-if="card" class="card__container__image-img" :src="slideImage" :alt="card.preDesc">
                    <div class="card__container__image__discount" v-if="card.discount || card.new">
                        <h3 v-if="card.discount">-{{ Math.floor((card.price - card.discountPrice) / card.discountPrice * 100) }}%</h3>
                        <h3 v-if="!card.discount && card.new">New</h3>
                    </div>
                </div>
                <div class="card__container__text">
                    <div class="card__container__text__container" v-if="card">
                        <div class="card__container__text__card-text">
                          <h2 class="card__container__text__card-text-title">{{ card.name }}</h2>
                          <h3 class="card__container__text__card-text-description">Код Товара: {{ card.itemCode }}</h3>
                        </div>
                        <div class="card__container__text__card-price" v-if="card.discount">
                          <h2 class="card__container__text__card-price-title">{{ card.discountPrice }} ₸</h2>
                          <h3 class="card__container__text__card-price-description">{{ card.price }} ₸</h3>
                        </div>
                        <div class="card__container__text__card-price" v-if="!card.discount">
                          <h2 class="card__container__text__card-price-title">{{ card.price }} ₸</h2>
                        </div>
                        <div class="card__container__text__buttons">
                          <router-link to="/busket"><button @click="toBusket(card.id)" class="button card__container__text__buttons-btn card__container__text__buttons-btn-busket">В корзину</button></router-link>
                          <router-link :to="{ path: `/busket/buying/${card.id}`}"><button class="button card__container__text__buttons-btn card__container__text__buttons-btn-buy">Купить в 1 клик</button></router-link>
                        </div>
                    </div>
                    <div class="card__container__text__card-description">
                        <h2 class="card__container__text__card-description-title">ОПИСАНИЕ ТОВАРА:</h2>
                        <div class="card__container__text__card-description-line"></div>
                        <div class="card__container__text__card-description-description" v-if="card">{{ card.description }}</div>
                    </div>
                </div>
            </div>
            <div class="card__slider">
                <button class="card__slider-btn card__slider-btn-left" @click="prevSlide"><img src="/images/card/Arrow 2.svg" alt="‹"></button>
                <div class="card__slider__container">
                    <div v-if="card" class="card__slider__container__images" :style="{ transform: `translateX(-${slideIndex * 100}%)` }">
                        <div class="card__slider__container__images__backgound">
                          <img class="card__slider__container__images-img" :src="card.image" @click="backToMainImage"/>
                        </div>
                        <div class="card__slider__container__images__backgound" v-for="(img, index) in card.images" :key="index" @click="toChangeImage(img)" @mouseenter="toHoverChangeImage(img)" @mouseleave="toResetImage" >
                            <img class="card__slider__container__images-img" :src="img"  />
                        </div>
                    </div>
                </div>
                <button class="card__slider-btn card__slider-btn-rigth" @click="nextSlide"><img src="/images/card/Arrow 2 (1).svg" alt="›"></button>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <div class="about__title">
                <h2 class="card__titles">Подробнее о товаре</h2>
            </div>
            <div class="popular__line"></div>
            <div class="about__container">
                <div class="about__container__accordions">
                    <div class="about__container__accordions__accordion" @click="toAaccardion(1)">
                        <div class="about__container__accordions__accordion-title">Характеристики <div v-if="accordionIndex == 1"><img src="/images/card/Vector 183.svg" alt="close"></div> <div v-if="accordionIndex !== 1"><img src="/images/card/Vector 169.svg" alt="open"></div></div>
                        <div class="popular__line about__container__accordions__accordion-line"></div>
                        <div class="about__container__accordions__accordion__content" v-if="accordionIndex == 1">
                            <div class="about__container__accordions__accordion__content-text">ШхВхГ: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.sizes }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Материал: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.material }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Тип: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.type }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Дверцы: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.discountDoors }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Число дверей: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.doors }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Количество полок: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.discountShelfs }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Вес: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.kg }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Дополнительно: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.Additionally }}</div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Страна изготовитель: <div class="about__container__accordions__accordion__content-description">{{ card.characteristics.country }}</div></div>
                        </div>
                    </div>
                    <div class="about__container__accordions__accordion" @click="toAaccardion(2)">
                        <div class="about__container__accordions__accordion-title">Оплата <div v-if="accordionIndex == 2"><img src="/images/card/Vector 183.svg" alt="close"></div> <div v-if="accordionIndex !== 2"><img src="/images/card/Vector 169.svg" alt="open"></div></div>
                        <div class="popular__line about__container__accordions__accordion-line"></div>
                        <div class="about__container__accordions__accordion__content" v-if="accordionIndex == 2">
                            <div class="about__container__accordions__accordion__content-text">Картой: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/accept.png" alt="yes"></div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Наличными: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/multiply.png" alt="no"></div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Удаленная оплата: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/accept.png" alt="yes"></div></div>
                            
                        </div>
                    </div>
                    <div class="about__container__accordions__accordion" @click="toAaccardion(3)">
                        <div class="about__container__accordions__accordion-title">Доставка <div v-if="accordionIndex == 3"><img src="/images/card/Vector 183.svg" alt="close"></div> <div v-if="accordionIndex !== 3"><img src="/images/card/Vector 169.svg" alt="open"></div></div>
                        <div class="popular__line about__container__accordions__accordion-line"></div>
                        <div class="about__container__accordions__accordion__content" v-if="accordionIndex == 3">
                            <div class="about__container__accordions__accordion__content-text">Служба доставки: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/accept.png" alt="yes"></div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                            <div class="about__container__accordions__accordion__content-text">Самовывоз: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/accept.png" alt="yes"></div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                        </div>
                    </div>
                    <div class="about__container__accordions__accordion" @click="toAaccardion(4)">
                        <div class="about__container__accordions__accordion-title">Гарантии <div v-if="accordionIndex == 4"><img src="/images/card/Vector 183.svg" alt="close"></div> <div v-if="accordionIndex !== 4"><img src="/images/card/Vector 169.svg" alt="open"></div></div>
                        <div class="popular__line about__container__accordions__accordion-line"></div>
                        <div class="about__container__accordions__accordion__content" v-if="accordionIndex == 4">
                            <div class="about__container__accordions__accordion__content-text">Наличие Гарантии: <div class="about__container__accordions__accordion__content-description"><img src="/images/card/accept.png" alt="yes"></div></div>
                            <div class="popular__line about__container__accordions__accordion-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="popular popular-similar">
        <div class="container">
          <div class="popular__title">
            <h2 class="card__titles">Похожие товары</h2>
          </div>
          <div class="popular__line"></div>
          <div class="popular__container popular__container-card">
            <div v-for="(item,index) in recommendated.slice(0, 8)" :key="index" class="popular__card">
              <router-link :to="{ path: `/card/${item.id}`}">
              <div class="popular__card__image-container">
                <img class="popular__card-image" :src="item.image" :alt="item.preDesc">
                <div class="popular__card-elipse popular__card-discount" v-if="item.discount">
                  <h3>-{{ Math.floor((item.price - item.discountPrice) / item.discountPrice * 100) }}%</h3>
                </div>
                <div class="popular__card-elipse popular__card-new" v-if="item.new">
                  <h3>New</h3>
                </div>
              </div>
              <div class="popular__card__text-container">
                <div class="popular__card-text">
                  <p class="popular__card__description">{{ item.preDesc }}</p>
                  <p class="popular__card__title">{{ item.name }}</p>
                </div>
                <div class="popular__card-price" v-if="item.discount">
                  <p class="popular__card__price">{{ Math.floor(item.price) }} ₸</p>
                  <p class="popular__card__price-discount">{{ item.discountPrice }} ₸</p>
                </div>
                <div class="popular__card-price" v-if="!item.discount">
                  <p class="popular__card__price-discount">{{ Math.floor(item.price) }} ₸</p>
                </div>
              </div>     
              </router-link>
            </div>
          </div>
        </div>
    </section>
    <section class="popular">
        <div class="container">
          <div class="popular__title">
            <h2 class="card__titles">Вы смотрели</h2>
          </div>
          <div class="popular__line"></div>
          <div class="popular__container popular__container-card">
            <div v-for="(item,index) in filledRecentlyViewed.slice(0, 8)" :key="index" class="popular__card">
              <router-link :to="{ path: `/card/${item.id}`}">
              <div class="popular__card__image-container">
                <img class="popular__card-image" :src="item.image" :alt="item.preDesc">
                <div class="popular__card-elipse popular__card-discount" v-if="item.discount">
                  <h3>-{{ Math.floor((item.price - item.discountPrice) / item.discountPrice * 100) }}%</h3>
                </div>
                <div class="popular__card-elipse popular__card-new" v-if="item.new">
                  <h3>New</h3>
                </div>
              </div>
              <div class="popular__card__text-container">
                <div class="popular__card-text">
                  <p class="popular__card__description">{{ item.preDesc }}</p>
                  <p class="popular__card__title">{{ item.name }}</p>
                </div>
                <div class="popular__card-price" v-if="item.discount">
                  <p class="popular__card__price">{{ Math.floor(item.price) }} ₸</p>
                  <p class="popular__card__price-discount">{{ item.discountPrice }} ₸</p>
                </div>
                <div class="popular__card-price" v-if="!item.discount">
                  <p class="popular__card__price-discount">{{ Math.floor(item.price) }} ₸</p>
                </div>
              </div>  
              </router-link>   
            </div>
          </div>
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
</template>

<script setup>
import { ref,onMounted,toRaw,computed  } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const datas = ref([])
const card = ref(null)
const cardId = parseInt(route.params.id)

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

const toRecommendations =(items)=>{
  return items.map(item => ({...item,category: item.category || 'Шкафы'}))
}

const accordionIndex = ref(null)
const recommendated = ref([])
// recommendated.push(toRecommendations(datas))

const slideIndex = ref(0)
const slideImage = ref("")
const originalImage = ref("")
const recentlyViewed = ref([])

recentlyViewed.length == 0

const getData =async()=>{
  const api = import.meta.env.VITE_API_URL
  const resp = await axios.get(api)
  datas.value = resp.data
  console.log(resp.data);
  card.value = datas.value.find(item => item.id == cardId)
  console.log(toRaw(card.value));

  if(card.value){
    slideImage.value = card.value.image
    originalImage.value = card.value.image
  }
  recommendated.value = toRecommendations(datas.value)
}
const toChangeImage =(img)=>{
  slideImage.value = img
  originalImage.value = img
}
const toHoverChangeImage=(img)=>{
  slideImage.value = img
}
const toResetImage =()=>{
  slideImage.value = originalImage.value
}
const backToMainImage = ()=>{
  slideImage.value = card.value.image
  originalImage.value = card.value.image
}

const nextSlide =()=>{
  console.log(slideIndex.value);
  if(slideIndex.value < Math.ceil(card.value.images.length / 4)){
    slideIndex.value++
    console.log(slideIndex.value)
  }
    
}
const prevSlide =()=>{
  console.log(slideIndex.value);
  if(slideIndex.value > 0){
    slideIndex.value--
    console.log(slideIndex.value);
  }
}
const toAaccardion = (index) => {
  accordionIndex.value = accordionIndex.value == index ? null : index
}

const toBusket=async(id)=>{
  let user = JSON.parse(localStorage.getItem('user'))
  if(!user.busket.some(item => item.id == id)){
    console.log(toRaw(card.value))
    user.busket.push(card.value)
  }
  const api = import.meta.env.VITE_USER_API_URL
  const response = await axios.put(`${api}/${user.id}`,{
    busket: user.busket
  })
  localStorage.setItem('user', JSON.stringify(response.data))
  console.log(response.data);
  
}
const toBuying =async(id)=>{
  let user = JSON.parse(localStorage.getItem('user'))
  const api = import.meta.env.VITE_USER_API_URL
  const resp = await axios.put(`${api}/${user.id}`,{
    order: user.order
  })
}

const addRecentlyViewed =async(id)=>{
  let user = JSON.parse(localStorage.getItem('user'))
  const viewedCard = datas.value.find((item) => item.id == id)
  console.log(user.recentlyViewed);
  
  if(!user.recentlyViewed.some(item => item.id == id)){
    user.recentlyViewed.push(viewedCard)
  }
  console.log(viewedCard);
  const api = import.meta.env.VITE_USER_API_URL
  const resp = await axios.put(`${api}/${user.id}`,{
    recentlyViewed:user.recentlyViewed,
  })
  console.log(resp);
  localStorage.setItem('user',JSON.stringify(resp.data))
  console.log();
  
}
const filledRecentlyViewed = computed(() => {
  if (recentlyViewed.value.length == 0) {
    return Array(8).fill({})
  }
  return recentlyViewed.value
})

// const cardData = ref({name:'', email:''})
let user = JSON.parse(localStorage.getItem('user'))
onMounted(()=>{
  // toOpenModal('Error','сначала авторизуйся')
  if(!user){
    toOpenModal('Error','сначала авторизуйся')
    return
  }
  setTimeout(() => {
    getData()
    setTimeout(() => {
      if(card){
        console.log(toRaw(card.value).id);
        addRecentlyViewed(toRaw(card.value).id)
        recentlyViewed.value = user.recentlyViewed
      }
      
      // addRecentlyViewed(card.id)
    }, 3000);
  }, 2000);
})
</script>

<style scoped>

</style>