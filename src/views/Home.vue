<template>
    <div class="home">
      <div class="carousel">
        <div class="carousel__wrapper">
          <div v-for="(image, index) in images" :key="index" class="carousel__slide" :class="{ active: index == currentIndex }">
            <img class="image" :src="image" alt="Slide" />
            <div class="carousel__text-container">
              <div class="carousel__text">
                <h1 class="carousel__text-title">Полная обстановка за один день!</h1>
                <h2 class="carousel__text-description">Гарантируем качество и долговечность.</h2>
              </div>
              <div class="carousel__btn">
                <button class="button carousel__btn-more" @click="toScroll">Подробнее</button>
                <!-- <Button :style="carousel__btn__more">
                  <router-link to="/"></router-link>
                </Button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="blur"></div>
        <div class="buttons">
          <button class="carousel__button left" @click="prevSlide"><img src="/images/main/Mask.svg" alt="❮"></button>
          <button class="carousel__button right" @click="nextSlide"><img src="/images/main/Mask (1).svg" alt="❯"></button>
        </div>
        <div class="carousel__dots">
          <div v-for="(image, index) in images" :key="index" class="dot" :class="{ active: index == currentIndex }" @click="goToSlide(index)"><div class="point"></div></div>
        </div>
      </div>
      <section class="popular">
        <div class="container">
          <div class="popular__title">
            <h2 class="home__titles">Популярные товары</h2>
          </div>
          <div class="popular__container">
            <div v-for="(item) in datas.slice(0, 8)" :key="item.id" class="popular__card">
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
      <section class="promotions">
        <div class="container">
          <div class="promotions__title">
            <h2 class="home__titles">Акции, скидки</h2>
          </div>
          <div class="promotions__container">
            <div class="promotions__container__big-card">
              <!-- <img class="promotions__container__big-card__image" src="/images/main/Rectangle 1928 (1).png" alt="chair"> -->
              <div class="promotions__container__big-card__container">
                <div class="promotions__container__big-card__container-date">9–16 сентября</div>
                <div class="promotions__container__big-card__container-text">
                  <div class="promotions__container__big-card-title">Осенние
                    скидки</div>
                  <div class="promotions__container__big-card-description">На распашные шкафы</div>
                </div>
                <div class="promotions__container__big-card__container-buttons">
                  <router-link to="/catalog"><button class="button promotions__container__big-card__container-button"><div>Подробнее</div></button></router-link>
                </div>
              </div>
            </div>
            <div class="promotions__container__small-card">
              <div class="promotions__container__small-card__text">
                <h2 class="promotions__container__small-card__text-title">Кухонные столы</h2>
                <p class="promotions__container__small-card__text-description">По спец. цене</p>
              </div>
              <div class="promotions__container__small-card__decore-points">
                <img src="/images/main/Group.svg" alt="points">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="catalogs">
        <div class="container">
          <div class="catalogs__title">
            <h2 class="home__titles">Наши категории товаров</h2>
          </div>
          <div class="catalogs__container">
            <div class="catalogs__container__card" v-for="(card,index) in datas.slice(0,6)" :key="index" v-if="datas">
              <img class="catalogs__container__card-img" :src="card.big__picture" :alt="card.name">
              <div class="catalogs__container__card__text">
                <h2 class="catalogs__container__card__text-title">{{ card.type }}</h2>
                <p class="catalogs__container__card__text-description">{{ card.description }}</p>
              </div>
              <router-link :to="{ path: `/card/${card.id}`}">
                <div class="catalogs__container__card__redirect">
                  <img src="/images/main/Arrow 1.svg" alt="arrow">
                </div>
              </router-link>
              
            </div>
          </div>
        </div>
      </section>
      <section class="delivery" ref="delivery">
        <div class="container">
          <div class="delivery__title">
            <h2 class="home__titles">Доставка и оплата</h2>
          </div>
          <div class="delivery__container">
            <div class="delivery__container__card" v-for="(card,index) in delivery" :key="index">
              <img class="delivery__container__card-img" :src="card.image" :alt="card.title">
              <div class="delivery__container__card__text">
                <h2 class="delivery__container__card__text-title">{{ card.title }}</h2>
                <p class="delivery__container__card__text-description">{{ card.description }}</p>
              </div>
              <div class="delivery__container__card__buttons">
                <router-link to="/"><button class="button delivery__container__card__button-button">Подробнее</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div v-if="modalVisible" class="modal modal__home" :style="{ backgroundColor: title == 'succes' ? '#026d4e' : '#D9534F' }">
        <div class="modal__container">
          <h2 class="modal__container-title">{{ modalTitle }}</h2>
          <p class="modal__container-description">{{ modalDescription }}</p>
          <button class="modal__container-btn" @click="toCloseModal">Закрыть</button>
        </div>
      </div>
    </div>
</template>

<script>
// import Button from '../shared/button/button.vue';
// import button from '../shared/button/button.vue';
// import Button from '../shared/Button/Button.vue';
// import Button from '../shared/button/button.vue';
import axios from 'axios';
import { toRaw } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      router:useRouter(),
      api:import.meta.env.VITE_API_URL,
      usersApi:import.meta.env.VITE_USER_API_URL,
      modalVisible: false,
      modalTitle:'',
      modalDescription: '',
      user:localStorage.getItem('user'),
      images: [
        '/images/main/Group 1022704.svg',
        '/images/main/Frame 4.svg',
        // '/images/main/Rectangle 1928.png'
        // '/images/main/image 78 (2).png'
        // '/images/main/image.png'
        // '/images/main/image (1).png'
        // '/images/main/image (2).png'
        // big__picture:'/images/main/image (6).png',
        // big__picture:'/images/main/image (7).png',
        // big__picture:'/images/main/image (8).png',
        // images:[
        //   '/images/card/image (9).png',
        //   '/images/card/image (10).png',
        //   '/images/card/image (11).png',
        //   '/images/card/image (12).png',
        // ],
      ],
      dataList:[ 
        {
          id: 1,
          new: false,
          category:'Диваны',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-001",
          big__picture:'/images/main/image (6).png',
          price: "35000",
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Стильные и прочные шкафы из МДФ для хранения и организации пространства.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 2,
          new: true,
          category:'Шкафы (купе)',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-002",
          price: "42000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Классические распашные шкафы с удобными дверцами для вашего интерьера.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 3,
          new: false,
          category:'Кухонные гарнитуры',
          name: "Версаль бетон пайн",
          itemCode: "VR-003",
          price: "55000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Классические распашные шкафы с удобными дверцами для вашего интерьера.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 4,
          new: false,
          category:'Столы',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-004",
          price: "39000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 5,
          new: false,
          category:'Шкафы (МДФ)',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-312",
          price: "35000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 6,
          new: true,
          category:'Прихожие',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-323",
          price: "42000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 7,
          new: false,
          category:'Кровати',
          name: "Версаль бетон пайн",
          itemCode: "VR-333",
          price: "55000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 8,
          new: false,
          category:'Комоды',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-311",
          price: "39000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 9,
          new: false,
          category:'Пуфики',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-101",
          price: "35000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 10,
          new: true,
          category:'Спальные гарнитуры',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-102",
          price: "42000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 11,
          new: false,
          category:'Стеллажи',
          name: "Версаль бетон пайн",
          itemCode: "VR-301",
          price: "55000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 12,
          new: false,
          category:'Шкафы (распашные)',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-405",
          price: "39000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 13,
          new: false,
          category:'Кухонные гарнитуры',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-231",
          price: "35000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 14,
          new: true,
          category:'Шкафы (купе)',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-999",
          price: "42000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 15,
          new: false,
          category:'Диваны',
          name: "Версаль бетон пайн",
          itemCode: "VR-310",
          price: "55000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 16,
          new: false,
          category:'Столы',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-318",
          price: "39000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 17,
          new: false,
          category:'Комоды',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-091",
          price: "35000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 18,
          new: true,
          category:'Кровати',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-008",
          price: "42000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 19,
          new: false,
          category:'Пуфики',
          name: "Версаль бетон пайн",
          itemCode: "VR-432",
          price: "55000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 20,
          new: false,
          category:'Шкафы (МДФ)',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-444",
          price: "39000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 21,
          new: false,
          category:'Стеллажи',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-666",
          price: "35000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 22,
          new: true,
          category:'Спальные гарнитуры',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-219",
          price: "42000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 23,
          new: false,
          category:'Шкафы (распашные)',
          name: "Версаль бетон пайн",
          itemCode: "VR-222",
          price: "55000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 24,
          new: false,
          category:'Прихожие',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-540",
          price: "39000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 25,
          new: false,
          category:'Кухонные гарнитуры',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-891",
          price: "35000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 26,
          new: true,
          category:'Диваны',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-671",
          price: "42000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 27,
          new: false,
          category:'Шкафы (купе)',
          name: "Версаль бетон пайн",
          itemCode: "VR-785",
          price: "55000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 28,
          new: false,
          category:'Столы',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-906",
          price: "39000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 29,
          new: false,
          category:'Шкафы (МДФ)',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-701",
          price: "35000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 30,
          new: true,
          category:'Кровати',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-953",
          price: "42000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 31,
          new: false,
          category:'Пуфики',
          name: "Версаль бетон пайн",
          itemCode: "VR-123",
          price: "55000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 32,
          new: false,
          category:'Спальные гарнитуры',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-124",
          price: "39000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 33,
          new: false,
          category:'Комоды',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-125",
          price: "35000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 34,
          new: true,
          category:'Стеллажи',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-126",
          price: "42000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 35,
          new: false,
          category:'Прихожие',
          name: "Версаль бетон пайн",
          itemCode: "VR-127",
          price: "55000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 36,
          new: false,
          category:'Шкафы (распашные)',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-128",
          price: "39000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
        {
          id: 37,
          new: false,
          category:'Шкафы (купе)',
          name: "Комфорт 4 дуб сонома белый без ящика",
          itemCode: "KF-129",
          price: "35000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image 78 (2).png",
          discount: true,
          discountPrice: 32000,
          description: "Просторный шкаф с удобным дизайном, выполнен в светлых тонах.",
          type: "Шкафы (МДФ)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "200x220x60 см",
            material: "МДФ, ДСП",
            type: "Распашной",
            doors: "4",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 120,
            Additionally: "Зеркало на двери, встроенная подсветка",
            country: "Россия"
          }
        },
        {
          id: 38,
          new: true,
          category:'Диваны',
          name: "Комфорт 3 дуб бунратти с зеркалом",
          itemCode: "KF-130",
          price: "42000",
          big__picture:'/images/main/image (7).png',
          image: "/images/main/image.png",
          discount: false,
          discountPrice: null,
          description: "Элегантный шкаф с зеркалом, стильное и функциональное решение.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "180x210x55 см",
            material: "Массив дерева, ЛДСП",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 95,
            Additionally: "Зеркало, плавное закрытие дверей",
            country: "Беларусь"
          }
        },
        {
          id: 39,
          new: false,
          category:'Кухонные гарнитуры',
          name: "Версаль бетон пайн",
          itemCode: "VR-131",
          price: "55000",
          big__picture:'/images/main/image (8).png',
          image: "/images/main/image (1).png",
          discount: true,
          discountPrice: 50000,
          description: "Современный стильный шкаф с бетонной текстурой.",
          type: "Шкафы (купе)",
          preDesc: "Шкафы и гардеробы",
          B_Y: false,
          images:[
            '/images/card/image (9).png',
            '/images/card/image (10).png',
            '/images/card/image (11).png',
            '/images/card/image (12).png',
          ],
          characteristics: {
            sizes: "220x240x65 см",
            material: "ЛДСП, стекло",
            type: "Купе",
            doors: "2",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 130,
            Additionally: "Раздвижные двери, встроенное освещение",
            country: "Германия"
          }
        },
        {
          id: 40,
          new: false,
          category:'Столы',
          name: "Комфорт 3 дуб сонома серый",
          itemCode: "KF-132",
          price: "39000",
          big__picture:'/images/main/image (6).png',
          image: "/images/main/image (2).png",
          discount: false,
          discountPrice: null,
          description: "Функциональный шкаф с серым оттенком и классическим дизайном.",
          type: "Шкафы (распашные)",
          preDesc: "Шкафы и гардеробы",
          B_Y: true,
          
          characteristics: {
            sizes: "190x210x60 см",
            material: "ЛДСП, пластик",
            type: "Распашной",
            doors: "3",
            discountDoors: "Нет",
            discountShelfs: "14",
            kg: 105,
            Additionally: "Система доводчиков, удобные полки",
            country: "Россия"
          }
        },
      ],
      users:[
        {
          id: 1,
          name: "Иван",
          surname: "Петров",
          email: "ivan.petrov@example.com",
          password: "hashed_password_1",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "",
          mailIndex: "",
          address: "",
          phone: "+77001234567"
        },
        {
          id: 2,
          name: "Анна",
          surname: "Смирнова",
          email: "anna.smirnova@example.com",
          password: "hashed_password_2",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "Москва, Россия",
          mailIndex: "101000",
          address: "ул. Ленина, д. 15",
          phone: "+79161234567"
        },
        {
          id: 3,
          name: "Дмитрий",
          surname: "Козлов",
          email: "dmitry.kozlov@example.com",
          password: "hashed_password_3",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "",
          mailIndex: "",
          address: "",
          phone: "+77005557788"
        },
        {
          id: 4,
          name: "Екатерина",
          surname: "Васильева",
          email: "ekaterina.v@example.com",
          password: "hashed_password_4",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "Санкт-Петербург, Россия",
          mailIndex: "190000",
          address: "Невский проспект, д. 22",
          phone: "+79211234567"
        },
        {
          id: 5,
          name: "Алексей",
          surname: "Сидоров",
          email: "alexey.sid@example.com",
          password: "hashed_password_5",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "",
          mailIndex: "",
          address: "",
          phone: "+77009991122"
        },
        {
          id: 6,
          name: "Марина",
          surname: "Иванова",
          email: "marina.ivanova@example.com",
          password: "hashed_password_6",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "Екатеринбург, Россия",
          mailIndex: "620000",
          address: "ул. Малышева, д. 5",
          phone: "+79312223344"
        },
        {
          id: 7,
          name: "Сергей",
          surname: "Морозов",
          email: "sergey.morozov@example.com",
          password: "hashed_password_7",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "",
          mailIndex: "",
          address: "",
          phone: "+77007778899"
        },
        {
          id: 8,
          name: "Ольга",
          surname: "Семенова",
          email: "olga.semenova@example.com",
          password: "hashed_password_8",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "Казань, Россия",
          mailIndex: "420000",
          address: "ул. Кремлевская, д. 10",
          phone: "+79876543210"
        },
        {
          id: 9,
          name: "Владимир",
          surname: "Николаев",
          email: "vladimir.nik@example.com",
          password: "hashed_password_9",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "",
          mailIndex: "",
          address: "",
          phone: "+77003334455"
        },
        {
          id: 10,
          name: "Наталья",
          surname: "Федорова",
          email: "natalia.fedorova@example.com",
          password: "hashed_password_10",
          busket: [],
          recentlyViewed: [],
          orders: [],
          locate: "Новосибирск, Россия",
          mailIndex: "630000",
          address: "ул. Красный проспект, д. 30",
          phone: "+79123334455"
        }
      ],
      delivery:[
        {id:1,image:'/images/main/image (3).png',title:'Условия доставки',description:'Узнайте подробности о нашей бесплатной доставке и профессиональной сборке.',},
        {id:2,image:'/images/main/image (4).png',title:'Условия оплаты',description:'Откройте все доступные способы оплаты и условия рассрочки.',},
        {id:3,image:'/images/main/image (5).png',title:'О компании',description:'Узнайте больше о компании и наших преимуществах.',},
      ],
      datas:[],
      // limitedItem:[],
      // api:apiGenerate(100),
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
    prevSlide(){
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    nextSlide(){
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    goToSlide(index){
      this.currentIndex = index
    },
    toScroll(){
      this.$refs.delivery.scrollIntoView({ behavior: "smooth" })
    },
    async postData(){
      this.dataList.forEach(async(element) => {
        const resp = await axios.post(this.api,element)
        console.log(resp.data);
      })
    },
    async postUsers(){
      // console.log(this.usersApi);
      // console.log(import.meta.env);
      
      this.users.forEach(async(element)=>{
        const resp = await axios.post(this.usersApi,element)
        console.log(resp.data);
        
      })
    },
    async getData(){
      const resp = await axios.get(this.api);
      this.datas = resp.data;
      console.log(toRaw(this.datas))
    }
  },
  created() {
    // this.postData()
    // this.toOpenModal('Error',"сначала авторизуйтесь")
    this.getData()
    if(!this.user){
      this.toOpenModal('Error',"сначала авторизуйтесь")
      this.$router.push('/account')
    }
  },
};
</script>

<style scoped>

</style>