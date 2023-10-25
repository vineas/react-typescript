type PersonProps = {
    name: {
        first: string
        last: string 
    }
}

export const Person = (props: PersonProps) => {
    return (
        <>
            {props.name.first} {props.name.last}
        </>
    );
}