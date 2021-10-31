// LibCms

// export default const LibCms 
const LibCms = {
  get_const: function(){
      return {
          aa: "aaa",
      }
  },
  get_show_item: function(items, id){
      let ret = null;
      items.forEach(function(item){
//console.log(item.show_id );
          if(item.save_id === String(id) ){
              ret = item
          }
      });
      return ret
  }, 
  get_page_item: function(items, id){
      let ret = null;
      items.forEach(function(item){
//console.log(item.show_id );
          if(item.save_id === String(id) ){
              ret = item
          }
      });
      return ret
  },        
  get_category_item: function(items, id){
      let ret = {
          id: 0,
          name: "",
          save_id: "",
      };
      items.forEach(function(item){
//console.log(item.show_id );
          if(item.save_id === String(id) ){
              ret = item
          }
      });
      return ret
  },    
  get_category_data: function(items, id){
      const ret = [];
      items.forEach(function(item){
//console.log(item.category.save_id );
          if(item.category.save_id === String(id) ){
              ret.push(item)
          }
      });
      return ret
  },
  get_category_items: function(items, id){
    const ret = [];
    items.forEach(function(item){
//console.log(item.category.save_id);
      if(item.category.save_id === String(id) ){
        ret.push(item)
      }
    });
    return ret
  },  
  get_post_items : function(posts , categories){
    try{
      let ret = []
      posts.forEach(function (item) {
        item.category = { name: ""}
        categories.forEach(function (category){
//console.log( order_item._id.toString() )
//if( item.category_id.toString() === category._id.toString()){
          if( item.category_id === category._id ){
//console.log( order_item )
            item.category = category ;
          }
        });
        ret.push(item)
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_post_items');
    } 
  },
  get_post_itemOne : function(item , categories){
    try{
      let ret = {}
      item.category = { name: ""}
      categories.forEach(function (category){
//         if( item.category_id.toString() === category._id.toString()){
        if( item.category_id === category.save_id ){
          item.category = category ;
        }
      });
      ret = item
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_post_itemOne');
    } 
  },    

}
export default LibCms;
