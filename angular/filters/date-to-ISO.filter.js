export function DateToISOFilter() {
    'ngInject';

    return function(input) {
        input = new Date(input).toISOString();
        return input;
    }
}
