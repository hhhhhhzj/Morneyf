<template>
  <Layout> 
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
      <Notes  fieldName="标签名" 
              placeholder=""/>
    </div>
  </Layout>
</template>

<script lang="ts">
import TagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from '@/components/Money/Notes.vue'

@Component  @Component({
    components: {Notes}
  })export default class EditLabel extends Vue {

  created() {
    const id = this.$route.params.id;
    TagListModel.fetch();
    
    const tags = TagListModel.data
    console.log(tags);
    const tag = tags.filter(t => t.id === id)[0]
    if(tag){
      console.log(tag);
    }else {
      this.$router.replace('/404')
    }
  }

}
</script>

<style lang="scss" scoped>
</style>