export const validate = () => {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            // form.classList.add('was-validated');
            if (this.id == 'form-for-calculation') {
                if ($('#departure-city').val() == '') {
                    $('#departure-city').siblings('.invalid-feedback').css('opacity', '1');
                } else {
                    $('#departure-city').siblings('.invalid-feedback').css('opacity', '0');
                }
                if ($('#arrival-city').val() == '') {
                    $('#arrival-city').siblings('.invalid-feedback').css('opacity', '1');
                } else {
                    $('#arrival-city').siblings('.invalid-feedback').css('opacity', '0');
                }
                if ($('#select-class option:selected').val() == '') {
                    $('#select-class').siblings('.invalid-feedback').css('opacity', '1');
                } else {
                    $('#select-class').siblings('.invalid-feedback').css('opacity', '0');
                }
            }

        }, false);
    });

}