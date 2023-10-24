type Greetprops = {
    name: string;
}

export const Greet = (props: Greetprops) => {
    return (
        <>
            <h2>Welcome {props.name}! in My Project</h2>
        </>
    );
}