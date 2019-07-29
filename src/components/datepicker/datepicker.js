class Datepicker {
  constructor(root) {
    this.$root = $(root);
    this.$date = $('<div />', {
      class: 'datepicker__custom-date'
    });

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

    this.$root.prepend(this.$date);

    $(document).on('click', 'button.ui-datepicker-current', () => {
      this.$root.datepicker('setDate', new Date());
      this.$root.trigger('change');
    });

    this.$root.on('change', () => {
      const selected = this.$root.val();
      const text = /^[0-9]{2}\/([0-9]{2})/.exec(selected)[1];

      this.$date.text(text);
    });

    this.$root.trigger('change');
  }
}

document
  .querySelectorAll('.datepicker')
  .forEach(element => new Datepicker(element));
