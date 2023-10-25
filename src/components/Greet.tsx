type Greetprops = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export const Greet = (props: Greetprops) => {
    return (
        <>
            <h2>
            {
            props.isLoggedIn ?
                `Welcome ${props.name}! Yo have ${props.messageCount} unread messages` : 'Welcome Guest'
                }
            </h2>
        </>
    );
}