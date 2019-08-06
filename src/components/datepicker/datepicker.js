class Datepicker {
  constructor(root) {
    this.$root = $(root);

    this.init = this.init.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTodayClick = this.handleTodayClick.bind(this);

    this.init();
  }

  handleChange() {
    const date = this.$root.val();
    const text = /^[0-9]{2}\/([0-9]{2})/.exec(date)[1];

    this.$date.text(text);
  }

  handleTodayClick() {
    this.$root.datepicker('setDate', new Date());
    this.$root.trigger('change');
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

    this.$date = $('<div />', {
      class: 'datepicker__custom-date'
    });

    this.$root.prepend(this.$date);

    $(document).on(
      'click',
      'button.ui-datepicker-current',
      this.handleTodayClick
    );
    this.$root.on('change', this.handleChange);

    this.$root.trigger('change');
  }
}

export default Datepicker;
