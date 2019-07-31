class Datepicker {
  constructor(root) {
    this.$root = $(root);

    this.init = this.init.bind(this);

    this.init();
  }

  init() {
    this.$root.datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      dayNamesMin: ['sat', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      minDate: null,
      maxDate: null
    });

    const $date = $('<div />', {
      class: 'datepicker__custom-date'
    });

    this.$root.prepend($date);

    $(document).on('click', 'button.ui-datepicker-current', () => {
      this.$root.datepicker('setDate', new Date());
      this.$root.trigger('change');
    });

    this.$root.on('change', () => {
      const selected = this.$root.val();
      const text = /^[0-9]{2}\/([0-9]{2})/.exec(selected)[1];

      $date.text(text);
    });

    this.$root.trigger('change');
  }
}

document
  .querySelectorAll('.datepicker')
  .forEach(element => new Datepicker(element));
