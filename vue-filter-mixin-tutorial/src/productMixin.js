export const productMixin = {
    data(){
    return {
    message : 'Selamlar bu filter bölümü tutorial',
      products  : ["Monitor", "Klavye", "Masa", "Kitap"],
      searchText : "",
    }
  },
  // computed sadece bir değişiklik olursa çalışıyor o yüzden daha performanslı
  // Öbür türlü dom sürekli  manipüle edilmeye çalışıyor
  computed: {
    filtered(){
      return this.products.filter((element) => {
          return element.match(this.searchText);
      })
    }
  }
}