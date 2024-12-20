<template>
  <main class="work-experience block">
    <h1 class="work-experience__title">Опыт работы:</h1>

    <div class="work-experience__item" v-for="work in works" :key="work.title">
      <h2> {{ work.title }} </h2>
      <p> {{ work.discription }} </p>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      works:[
        {
          title: 'Involta - 1 год',
          discription: 'Занимался фронтендом vk-mini-app приложения'
        },
        {
          title: 'Light-food - 8 месяцев',
          discription: 'Полностью созданное мой приложение, сервер сделан на express.js, бд mongoDB, фронетенд на vue, более подробно о реализованных задачах расписал в readme проекта'
        },
        {
          title: 'Фриланс - 7 месяцев',
          discription: 'Помогал с деплоем приложений, реализовывал добавление товаров в корзину, делал сайт визитку для мастерской ремонта телефонов, полностью переделывал сайт компании по производству упаковки, реализация админ панели и многое другое'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  .work-experience {
    height:  100%;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 20px 20px;
    color: var(--text-color);
    min-height: 100%;

    @media (max-width: 700px){
      height: auto;
    }

    &__title{
      padding-bottom: 10px;
    }
    
    &__item{
      margin: 10px 0px 10px 50px;
      line-height: 25px;
      
      @media (max-width: 700px){
        margin: 10px 0px 10px 0px;
      }
    }
  }
</style>