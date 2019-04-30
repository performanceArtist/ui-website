(function ($) {
  $.switcher = function (filter) {
    let $haul = $('input[type=checkbox],input[type=radio]');

    if (filter !== undefined && filter.length) {
      $haul = $haul.filter(filter);
    }

    $haul.each(function () {
      const $checkbox = $(this).hide();
      const $switcher = $(document.createElement('div'))
        .addClass('ui-switcher')
        .attr('aria-checked', $checkbox.is(':checked'));

      if ($checkbox.attr('type') === 'radio') {
        $switcher.attr('data-name', $checkbox.attr('name'));
      }

      toggleSwitch = function (e) {
        if (e.target.type === undefined) {
          $checkbox.trigger(e.type);
        }
        $switcher.attr('aria-checked', $checkbox.is(':checked'));
        if ($checkbox.attr('type') === 'radio') {
          $(`.ui-switcher[data-name=${$checkbox.attr('name')}]`)
            .not($switcher.get(0))
            .attr('aria-checked', false);
        }
      };

      $switcher.on('click', toggleSwitch);
      $checkbox.on('click', toggleSwitch);

      $switcher.insertBefore($checkbox);
    });
  };
}(jQuery));
