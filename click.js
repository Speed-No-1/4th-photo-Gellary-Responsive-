function img_changer(type) {
  var img_ids = ["img1", "img2", "img3", "img4", "img5", "img6"];

  for (var i = 0; i < img_ids.length; i++) {
    var img_id = img_ids[i];
    var html_img_id = document.getElementById(img_id);
    html_img_id.src = `images/${type}${i+1}.jpg`;
  }

}

$("#btn2").click(function(){
  $("#more-pic").slideToggle(2000);
});

// $('.portfolio-item').isotope({
//       // options
//   itemSelector: '.item',
//   layoutMode: 'fitRows'
// });
//         $('.portfolio-menu ul li').click(function(){
//         $('portfolio-menu ul li').removeClass('active');
//         $(this).addClass(active);

//            var selector = $(this).attr('data-filter');
//         $('.portfolio-item').isotope({
//             filter:selector
//         });
//         return false   
//         });