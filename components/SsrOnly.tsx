export function A() {
    return <B />;
}

function B() {
    return <C />;
}

function C() {
    return <p>Hello World</p>
}
