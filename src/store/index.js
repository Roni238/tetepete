import { createStore } from 'vuex'
import cursorModule from './cursorModule'

export default createStore({
  state:()=>({
    nameCurrentImage:[],
    darkThemeStatus:false,
    screenWidth: screen.width,
    projects:[
      {
        title:'Light food',
        description:'Сайт с рецептами на vue&vuex \n\n  Тут расскажу кратко только про реализацию клиента, более подробно о проекте и коде (и клиента и сервера) на гитхабе в readme файле \nㅤ Стейт поделен по модулям, каждый модуль в стейте использует нужный ему сервис с запросами, переменные стилей в файле variables.css (использовал переменные css, а не scss тк они должны меняться для стилизации), в папке router реализованы мидлвееры и обновления тега title у страниц \nㅤ из функционала реализовал:\nㅤ  регистрация, логин, логаут с сохранением токена пользователя в localstorege \nㅤ регистронезависимый поиск рецептов \nㅤ мидлвееры на стороне клиента и сервера \nㅤ роли пользователей (клиент, повар, админ) с разными возможностями \nㅤ создание, настройка и смена тем для каждой категории рецептов в админ панели \nㅤ динамические метатеги для поисковиков \nㅤ lezyloading \nㅤ админ панель со сменой ролей пользователей, удалением и созданием редактированием категорий, постов, комментариев и пользователей \nㅤ и многое другое \n\n Админ аккаунт \n email : admin \n pass : Sova2380',
        images:['lightfood-1.png','lightfood-2.png','lightfood-3.png','lightfood-4.png','lightfood-5.png','lightfood-6.png','lightfood-7.png','lightfood-8.png','lightfood-9.png'],
        codeLink:'https://github.com/Roni238/cooking_vue_express',
        projectLink:'https://light-food.ru/'
      },
      {
        title:'Новостная лента',
        description:'Приложение на NuxtJs с использованием Vuex и TypeScript, в качестве новостных лент используется rss ленты lenta.ru и mos.ru (более подробно о реализации на github в readme файле) \n \n можно поменять вид отображения постов, который хранится в localStorage, есть постраничная пагинация отображаемая полным путём в url, есть фильтры по источнику новостей которые хранятся в query параметрах, запрос из строки поиска отображается там же, кнопка со стрелкой сбрасывает все фильтры и поисковые запросы обновляет посты. Тк запросы на прямую на ленту блочит из-за origin a есть серверные прокси для запросов (в прод и дев версии они реализованны по-разному, из-за vercel)',
        images:['news-1.png','news-2.png','news-3.png','news-4.png','news-5.png'],
        codeLink:'https://github.com/Roni238/news-feed',
        projectLink:'https://news-feed-j5b3.vercel.app/'
      },
      {
        title:'Softline',
        description:'Сайт Softline выполнен в качестве тестовой работы \n \n в коде есть комментарии с пояснениями + на гитхабе краткая документация. Cделан по макету с соблюдением pixel perfect, использовал webpack, scss, компонентный подход, БЭМ, больше описания кода на github в readme файле.',
        images:['Softline-1.png', 'Softline-2.png', 'Softline-3.png', 'Softline-4.png', 'Softline-5.jpg', 'Softline-6.jpg'],
        codeLink:'https://github.com/Roni238/softline',
        projectLink:'https://roni238.github.io/softline/'
      },
      {
        title:'Numia',
        description:'Сервис в ВК которым я занимался, когда работал в Involta \n \n  Мной поделена работа по созданию навигации, создан дашборд и категории в нем, мидвееры-затычки о категориях в разработке и о категориях за подписку, полностью переделана верстка после редизайна, исправлено много багов',
        images:['numia2.jpg','numia.jpg','numia3.jpg'],
      },
      {
        title:'Солнечная система',
        description:'Макет солнечной системы, сделан на конкурс проектов по астрономии \n \n Сайт сделан на ванильном js&css&html без фреймворков и библиотек и запросов, нужно было реализовать все для работы офлайн просто по открытью index.html и чтобы ноут на 512мб оперативки открыл проект \nㅤ есть сам макет солнечной системы, список планет, и поле с дополнительной информацией \nㅤ по кнопке "Найди меня" отображается страна пользователя, фаза луны, время рассвета и время заката ( все данные примерные, тк запуск офлайн, страна определяется с помощью часового пояса устройства, а время рассвета заката и фаза луны высчитываются по формулам на самом сайте, все подсчеты с небольшой погрешностью, формулы подсчета описаны в readme на github) \nㅤ при выборе интересующей планеты в списке или по клику на нее появляется краткое описание с гифкой и ссылкой на статью на википедии \nㅤ звездное небо на заднем плане сделано созданием точек на канвасе в рандомных координатах по ширине экрана, в файле bg.js можно кастомизировать звезды если нужно',
        images:['space-map-1.png','space-map-2.png'],
        codeLink:'https://github.com/Roni238/SpaceMap',
        projectLink:'https://roni238.github.io/SpaceMap/'
      },
      {
        title:'Messenger',
        description:'Тестовое задание выполненное для "Involta" \n \n Нужно было написать frontend мессенджера, делающий запрос на сервер, он возвращает по 20 разных сообщений, или выдает ошибку, ошибка тоже обработана, в коде проекта всё  прокомментировано',
        images:['messanger1.png','messanger2.png'],
        codeLink:'https://github.com/Roni238/Messenger',
        projectLink:'https://roni238.github.io/Messenger/'
      },
      {
        title:'Спамер рекламы',
        description:'Спамер для рассылки рекламы по почтам \n \n  В файле конфига .env указать email и пароль почты с которой будет рассылка в переменные SMTP_USER и SMTP_PASS \n  ㅤ файл Message.html - темплейт сообщения для отправки \nㅤ в recipients.txt и указываете список почт на которые будет рассылка, node index.js - запуск рассылки',
        images:['spam1.jpg','spam2.jpg'],
        codeLink:'https://github.com/Roni238/spam_mailing',
      }
    ]
  }),
  getters: {
    getNameCurrentImage(state){return state.nameCurrentImage},
    getProjects(state){return state.projects},
    getDarkThemeStatus(state){return state.darkThemeStatus},
    getScreenWidth(state){return state.screenWidth},
  },
  mutations: {
    setNameCurrentImage(state,value){state.nameCurrentImage=value},
    setShowContacts(state,value){state.showContacts=value},
    setDarkThemeStatus(state,value){state.darkThemeStatus=!state.darkThemeStatus},
    setScreenWidth(state,value){state.screenWidth=value},
  },
  actions: {
    
  },
  modules: {
    cursorModule
  },
  namespaced:true
})
