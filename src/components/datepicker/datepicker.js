export default function addCalendar(selector) {
  const el = $(selector);
  el.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    dayNamesMin: ['sat', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    minDate: null,
    maxDate: null,
  });

  const nel = $('<div />', {
    class: 'datepicker-custom-date',
  });

  el.prepend(nel);

  el.on('change', function changeCustomDate() {
    const selected = $(this).val();
    const text = /^[0-9]{2}\/([0-9]{2})/.exec(selected)[1];

    nel.text(text);
  });

  el.trigger('change');
}
