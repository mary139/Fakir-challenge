const style = {
  root: {
    width: '100%',
    display: 'block',
  },
  container: {
    position: 'relative',
    width: '50%',
    margin: '50px auto',
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#aaa',
    border: '3px solid #ddd',
    position: 'relative',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRadius: 5,
    height: 52,
    padding: [0, 14],
  },
  input: {
    textTransform: 'capitalize',
    width: '100%',
    backgroundColor: 'transparent',
    '&::placeholder': {
      color: '#ddd',
    },
    border: 0,
    outline: 0,
    lineHeight: '52px',
    height: '52px',
    fontSize: 14,
    color: '#fff',
  },
  options: {
    width: '100%',
    backgroundColor: '#000',
    border: '3px solid #ddd',
    color: '#fff',
    borderRadius: 5,
    marginTop: 4,
    position: 'absolute',
    zIndex: 10,
    padding: [0, 14],
    "& div": {
      borderBottom: '1px dashed #ddd',
      '&:hover': {
        backgroundColor: '#484747',
      },
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      height: '52px',
      lineHeight: '52px',
      outline: 'none',
      width: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    "& > :last-child": {
      borderBottom: 'none',
    },
  },
  notFound: {
    color: '#ff0 !important',
  },
  active: {
    color: '#ff0 !important',
  },
}

export default style
