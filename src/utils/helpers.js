export function validateEmail(email) {
    const re=^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$;
    return (email);
}