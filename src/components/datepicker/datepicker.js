export default function makeDatepicker(element) {
  const datepicker = $(element);
  const customDate = $('<div />', {
    class: 'datepicker__custom-date'
  });

  datepicker.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    dayNamesMin: ['sat', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    minDate: null,
    maxDate: null
  });

  datepicker.prepend(customDate);

  $(document).on('click', 'button.ui-datepicker-current', () => {
    datepicker.datepicker('setDate', new Date());
    datepicker.trigger('change');
  });

  datepicker.on('change', function changeCustomDate() {
    const selected = $(this).val();
    const text = /^[0-9]{2}\/([0-9]{2})/.exec(selected)[1];

    customDate.text(text);
  });

  datepicker.trigger('change');
}

document.querySelectorAll('.datepicker').forEach(makeDatepicker);
