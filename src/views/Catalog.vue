<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__title">
        <h2 class="home__titles">Акции, скидки</h2>
      </div>
      <div class="catalog__line"></div>
      <div class="catalog__container">
        <div class="catalog__container__categories">
          <div class="catalog__container__categories__text">
            <div class="catalog__container__categories__text-title">Категория</div>
            <div class="popular__line catalog__container__categories__text-line"></div>
          </div>
          <div class="catalog__container__categories__container">
            <div data-value="Шкафы (МДФ)" @click="toCatalog(1)" class="catalog__container__categories__container__category test">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 1 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Шкафы (МДФ)</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Шкафы (распашные)" @click="toCatalog(2)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 2 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Шкафы (распашные)</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Шкафы (купе)" @click="toCatalog(3)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 3 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Шкафы (купе)</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Спальные гарнитуры" @click="toCatalog(4)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 4 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Спальные гарнитуры</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Кровати" @click="toCatalog(5)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 5 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Кровати</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Диваны" @click="toCatalog(6)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 6 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Диваны</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Пуфики" @click="toCatalog(7)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 7 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Пуфики</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Кухонные гарнитуры" @click="toCatalog(8)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 8 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Кухонные гарнитуры</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Столы" @click="toCatalog(9)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 9 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Столы</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Прихожие" @click="toCatalog(10)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 10 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Прихожие</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Комоды" @click="toCatalog(11)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 11 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Комоды</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Стеллажи" @click="toCatalog(12)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 12 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Стеллажи</div>
              </div>
              <div class="popular__line catalog__container__categories__container__category-line"></div>
            </div>
            <div data-value="Б/У" @click="toCatalog(13)" class="catalog__container__categories__container__category">
              <div class="catalog__container__categories__container__category__container" :class="{ catalog__container__categories__container__category__container_active: activeCatalogIndex == 13 }">
                <div class="catalog__container__categories__container__category-point"></div>
                <div class="catalog__container__categories__container__category-title">Б/У</div>
              </div>
            </div>
          </div>
        </div>
        <div class="catalog__container__products">
          <div class="catalog__container__products__filter">
              <div class="catalog__container__products__filter__label">
                <img class="catalog__container__products__filter__label-img" src="/images/catalog/Vector (1).svg" alt="sort">
                <h3 class="catalog__container__products__filter__label-text">Сортировка:</h3>
              </div>
              <select v-model="selectedSort" class="catalog__container__products__filter__select">
                <option value="default" class="catalog__container__products__filter__select-option">Обычное</option>
                <option value="popularity" class="catalog__container__products__filter__select-option">по поулярности</option>
                <option value="price" class="catalog__container__products__filter__select-option">по цене</option>
                <option value="discount" class="catalog__container__products__filter__select-option">по скидке</option>
              </select>
          </div>
          <div class="catalog__container__products__cards">
            <div v-for="(item,index) in paginatedArr" :key="index" class="popular__card">
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
          <div class="catalog__container__products__pagination" v-if="totalPages > 1">
            <button class="catalog__container__products__pagination-button" @click="prevPage" :disabled="paginationPage == 1"><img src="/images/catalog/Vector (2).svg" alt="left"></button>
            <div class="catalog__container__products__pagination__pages">
              <button class="catalog__container__products__pagination__pages-page" :class="{ catalog__container__products__pagination__pages_page_active: paginationPage == page }" v-for="(page,index) in displayedPages" :key="index" v-if="totalPages > 1" @click="toPage(page)" :disabled="page == '...'" :style="{ cursor: page == '...' ? 'not-allowed' : 'pointer' }"> {{ page }}</button>
            </div>
            <button class="catalog__container__products__pagination-button" @click="nextPage" :disabled="paginationPage == totalPages"><img src="/images/catalog/Vector (3).svg" alt="rigth"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue';
import axios from 'axios';

const datas = ref([])
const activeCatalogIndex = ref(null)
const selectedSort = ref("default")

const paginatedCard = 6
const paginationPage = ref(1)
const totalPages = computed(() => Math.ceil(sortedProducts.value.length / paginatedCard))

const paginatedArr = computed(() => {
  const start = (paginationPage.value - 1) * paginatedCard
  return sortedProducts.value.slice(start, start + paginatedCard)
})
const displayedPages = computed(() => {
  let pages = []
  if (paginationPage.value < 4) {
    pages = [1, 2, 3, 4, '...', totalPages.value]
  } else if (paginationPage.value >= totalPages.value - 2) {
    pages = [1, '...', totalPages.value - 3, totalPages.value - 2, totalPages.value - 1, totalPages.value];
  } else {
    pages = [paginationPage.value - 1, paginationPage.value, paginationPage.value + 1, '...', totalPages.value];
  }
  return pages
});

const toPage = (page) => {
  if (page !== '...') {
    paginationPage.value = page;
  }
};

const prevPage = () => {
  if (paginationPage.value > 1) {
    paginationPage.value--;
  }
};

const nextPage = () => {
  if (paginationPage.value < totalPages.value) {
    paginationPage.value++;
  }
}
const toCatalog = (index) => {
  activeCatalogIndex.value = activeCatalogIndex.value == index ? null : index
}
const categoryMap = {
  1: 'Шкафы (МДФ)',
  2: 'Шкафы (распашные)',
  3: 'Шкафы (купе)',
  4: 'Спальные гарнитуры',
  5: 'Кровати',
  6: 'Диваны',
  7: 'Пуфики',
  8: 'Кухонные гарнитуры',
  9: 'Столы',
  10: 'Прихожие',
  11: 'Комоды',
  12: 'Стеллажи',
  13: 'Б/У',
}

const filteredProducts = computed(() =>{
  console.log(activeCatalogIndex.value);
  
  if(activeCatalogIndex.value == null){
    return datas.value
  }
  else if(activeCatalogIndex.value == 13){
    return datas.value.filter(card => card.B_Y)
  }
  const categoryName = categoryMap[activeCatalogIndex.value] || null
  console.log(categoryName);
  return datas.value.filter((card) => {
    return card.category == categoryName
    console.log(card.category);  
  })
  // return datas.value.find((card) => card.category == categoryName)
})
const sortedProducts = computed(() => {
  let sorted = [...filteredProducts.value]
  if(selectedSort.value == "popularity"){
    return sorted.sort((a,b) => b.new - a.new)
  }
  else if(selectedSort.value == "price"){
    return sorted.sort((a,b) => a.price - b.price)
  }
  else if(selectedSort.value == "discount"){
    return sorted.sort((a,b) => b.discountPrice - a.discountPrice)
  }
  return sorted
})

const getData =async()=>{
  const api = import.meta.env.VITE_API_URL
  const resp = await axios.get(api)
  datas.value = resp.data
}
const user = localStorage.getItem('user') 
onMounted(()=>{
  setTimeout(() => {
    getData()
  }, 2000);
})

</script>

<style scoped>

</style>