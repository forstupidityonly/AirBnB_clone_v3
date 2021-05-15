// Listen for changes on each INPUT checkbox tag
$(function (){
  const id_dict = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      id_dict[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete id_dict[$(this).attr('data-id')];
      }
      $('.amenities h4').text(Object.values(id_dict).join(','));
    });
});
