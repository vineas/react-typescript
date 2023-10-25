type Greetprops = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: Greetprops) => {
    const {messageCount = 0} = props
    return (
        <>
            <h2>
            {
            props.isLoggedIn ?
                `Welcome ${props.name}! Yo have ${messageCount} unread messages` : 'Welcome Guest'
                }
            </h2>
        </>
    );
}