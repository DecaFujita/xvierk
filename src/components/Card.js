// STYLE
const card = {
    width: '100%',
    height: '57rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(48, 26, 48, 0) 0%, rgba(48, 26, 48, 0.5) 18.87%, rgba(48, 26, 48, 0.5) 85.77%, rgba(48, 26, 48, 0) 97.9%)',
}

const container = {
    width: '100rem',
    height: '50rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const texts = { width: '60%' }

const title = { fontSize: '4.6rem', fontWeight: '500' }

const body = { fontSize: '1.8rem', lineHeight: '150%' }

const imgs = { width: '33%', display: 'flex', justifyContent: 'center' }

// APP
const Card = props => {
    return (
        <div style={card}>
          <div style={container}>
            <div style={texts}>
                <h1 style={title}>{props.title}</h1>
                <p style={body}>{props.body}</p>
            </div>
            <div style={imgs}>
                {props.img()}
            </div>
          </div>
        </div>
    )
};

export default Card;