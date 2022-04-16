// Get photographers and media data
export function getData() {
        return fetch('/data/photographers.json')
                .then(res => res.json())
                .catch(err => console.log('an error occurs', err));
}
