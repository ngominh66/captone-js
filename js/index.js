

(function(){
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET'
    }).then(function(res){

        console.log(res.data)  
        var giayApi = res.data.content;
        var content ='';
        for(var index=0; index<giayApi.length; index++){
            var giay = giayApi[index];
            content += `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="${giay.image}" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="">${giay.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                    <button type="button" class="btn btn-warning">Buy Now</button>
                    <button type="button" class="btn btn-secondary">850$</button>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>`
            
        }  
        document.querySelector('#danh-sach-giay').innerHTML=content;
      
  
    }).catch(function(err){
        console.log(err.response.data)

    })
    
})()