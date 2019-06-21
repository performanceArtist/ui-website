export default function addCalendar(selector) {
  const calendar = $(selector);
  const customDate = $('<div />', {
    class: 'calendar__custom-date'
  });

  calendar.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    dayNamesMin: ['sat', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    minDate: null,
    maxDate: null
  });

  calendar.prepend(customDate);

  $(document).on('click', 'button.ui-datepicker-current', () => {
    calendar.datepicker('setDate', new Date());
    calendar.trigger('change');
  });

  calendar.on('change', function changeCustomDate() {
    const selected = $(this).val();
    const text = /^[0-9]{2}\/([0-9]{2})/.exec(selected)[1];

    customDate.text(text);
  });

  calendar.trigger('change');
}
