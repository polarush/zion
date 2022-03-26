jQuery(($) => {
  // input type number 
  // Уменьшаем на 1 
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 1);
      }
  });
  // Увеличиваем на 1 
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      total.val(+total.val() + 1);
  });
  // Запрещаем ввод текста 
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});

