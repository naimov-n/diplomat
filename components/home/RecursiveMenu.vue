<template>
  <div class="m">
        <div v-if="menu.child" class="menu-title">{{ menu.title }}</div>
        <nuxt-link v-if="!menu.child" :to="localePath({
          path:  menu.options ? `/${menu.options}` : `/static/${menu.slug}`
        })" >
            {{ menu.title }}
        </nuxt-link>
        <div v-if="menu.child" class="menu-list">
            <HomeRecursiveMenu v-for="item in menu.child" :key="item.id" :menu="item" />
        </div>

  </div>
</template>

<script>
export default {
    name: "RecursiveMenu",
    props: {
        menu: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            a: 1,
            b: '/contacts/contact'
        }
    },
    methods:{
      defineLink(item) {
        return item && item.group && item.has_category
          ? `/${item.group}/category/${item.slug}`
          : item && item.group && !item.has_category
          ? `/${item.group}`
          : `/static/${item.slug}`;
      },
    },
    mounted() {
        // console.log(this.menu)
    }
}
</script>

<style>
.menu-title {
    /* color: #fff; */
    cursor: pointer;
    display: block;
}
/* .menu-title:hover + .menu-list {
    height: auto;
    opacity: 1;
}
.menu-list:hover {
    height: auto;
    opacity: 1;
} */

.header-men .m, .header-men .m>a {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* color: #FFFFFF; */
}
.header-men .menu-list .m{
    padding: 0px 15px 8px 15px;
    transition-delay: all  0.5s;
}

.header-men .menu-list .m:last-child {
    padding-bottom: 0;
}

.header-men>.m {
    padding: 8px 0;
}

.header-men .menu-list {
    position: absolute;
     border-radius: 4px;
    top: 38px;
    left: 0;
    min-width: 230px;
    padding: 20px 0px;
    background-color: #1C61AC;
    transition: all 1s linear;
   display: none;
   z-index: 3;
}

.header-men .m:hover>.menu-list, .header-men .menu-list:hover {
    display: block;
    transition: all 0.3s linear;
}

.header-men .menu-list::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -10px;
    margin-left: -10px;
    border: 10px solid transparent;
    border-top-width: 0;
    border-bottom-color: #1C61AC;
    left: 12%;
}

.header-men>.m  .menu-list>.m .menu-list {
    position: absolute;
    top: -12px;
    left: 236px;
    transition-delay: all  0.5s;
}

.header-men>.m  .menu-list>.m .menu-list::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 10px;
    margin-left: -10px;
    border: 18px solid transparent;
    border-top-width: 0;
    border-bottom-color: #1C61AC;
    left: -4%;
    transform: rotateZ(-90deg);
}

.menu-list .menu-title, .menu-list .m>a {
    color: #fff;
}

/*  */
</style>
