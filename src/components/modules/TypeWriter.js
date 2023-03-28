import Typewriter from 'typewriter-effect';

export default function TypeWriter(props) {
    return (
        <Typewriter style={{ fontSize: '15px', lineHeight: '1px', color: '#000' }}
            onInit={(typewriter) => {
                if (props.words) {
                    typewriter.typeString(props.words).start()
                }

            }}
        />
    );
}