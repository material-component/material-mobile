<template>
  <div class="doc-nav">
    <ol>
      <li>组件库</li>
      <ul>
        <li
          :class="{ active: isActive(_package.name) }"
          v-for="_package in docs.packages"
          :key="_package"
        >
          <router-link
            v-if="!_package.isLink"
            :to="_package.name.toLowerCase()"
            >{{ _package.cName }}</router-link
          >
          <a v-else :href="_package.name" target="_blank">{{
            _package.cName
          }}</a>
        </li>
      </ul>
    </ol>
    <ol v-for="_nav in nav" :key="_nav">
      <li>
        {{ _nav.name }}
      </li>
      <ul>
        <template
          :class="{ active: isActive(_package.name) }"
          v-for="_package in _nav.packages"
          :key="_package"
        >
          <li v-if="_package.show">
            <router-link :to="_package.url">
              {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
            </router-link>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted, ref } from 'vue'
// import { currentRoute } from '@/sites/assets/util/ref'
import { nav, docs } from '../config.json'
const currentRoute = ref('/')
export default defineComponent({
  name: 'doc-nav',
  setup() {
    const isActive = computed(() => {
      return function (name: string) {
        return currentRoute.value == name.toLowerCase()
      }
    })
    onMounted(() => {
      console.log('123' + nav)
    })
    return {
      isActive,
      nav: reactive(nav),
      docs: reactive(docs),
      currentRoute
    }
  }
})
</script>

<style lang="scss">
.doc {
  &-nav {
    background: #fff;
    width: 100%;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;
    ol {
      padding-left: 20px;
      &.introduce {
        padding-left: 5px;
        li {
          cursor: pointer;
          &:hover {
            color: #f2f2f2;
          }
        }
      }
      li {
        font-size: 14px;
        color: #000;
        font-weight: bold;
        position: relative;
      }
      & > li {
        height: 34px;
        line-height: 30px;
      }
      > ul {
        li {
          height: 26px;
          line-height: 26px;
          padding-left: 15px;
          cursor: pointer;
          & > a {
            color: #000;
            &:hover {
              color: #4fc08d;
            }
          }
          .router-link-active {
            color: #4fc08d;
          }
        }
      }
    }
  }
}
</style>
