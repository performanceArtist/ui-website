(function($) {
  $.fn.progressbar = function(options) {
    const opts = $.extend({}, options);

    return this.each(function() {
      const $this = $(this);

      const $ul = $('<ul>').attr('class', 'progressbar');

      let currentIdx = -1;

      $.each(opts.steps, (index, value) => {
        const $li = $('<li>').text(value.replace('@', '').replace('~', ''));
        $li.css('width', `${100 / opts.steps.length}%`);

        if (value.indexOf('@') > -1) {
          $li.addClass('current');
          currentIdx = index;
        }

        if (value.indexOf('~') > -1) {
          $li.addClass('fail');
        }

        $ul.append($li);
      });

      for (let i = 0; i < currentIdx; i++) {
        $($ul.find('li')[i]).addClass('done');
      }

      $this.append($ul);
    });
  };
})(jQuery);

document.querySelectorAll('.stage').forEach(element => {
  const $element = $(element);
  const data = $element.data();
  $element.progressbar(data);
});
