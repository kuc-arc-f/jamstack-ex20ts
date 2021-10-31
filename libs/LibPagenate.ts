// LibPagenate
import LibCommon from "../libs/LibCommon"

//
const LibPagenate = {
  init:function(){
      this.per_page = 10;
  },    
  set_per_page:function(num){
      this.per_page = num;
  },
  get_per_page:function(){
      return  this.per_page;
  },
  get_max_page:function(count){
      const num = count / this.per_page;
      return num
  },            
  get_page_start:function(page){
      const start_num = (page -1) * this.per_page;
      const end = page * this.per_page;
      const ret ={
          start: start_num,  end: end,
      }        
//        console.log("per_page:",this.per_page)
      return ret;
  },   
  is_paging_display(count){
      let ret = 0;
      const num = count / this.per_page;
      if(num >= 1){
          ret = 1
      }
      return ret;
  },
  is_next_display(page, count){
      let ret = 0
      const maxNum = count / this.per_page;
// console.log( "maxNum=" ,maxNum )
      if(page < maxNum){
          ret = 1
      }
      return ret
  },    
  get_page_items(data){
      const paginate_disp = this.is_paging_display(data.length)
      const page_item = {
          "item_count":data.length ,"paginate_disp": paginate_disp
      }
      const param = {
            "docs": data ,
            "page_item": page_item,            
      };
      return  param;       
  },
  getOnepageItems : function(items, start , end){
      const ret = []
      items.forEach(function(item, index){
          if((index >= start) && (index < end )){
              ret.push(item)
          }
  //            console.log( item )
      });
      return ret
  }   
}
export default LibPagenate;
