import React, { FC, ReactElement, useState }  from 'react'
import injectSheet from 'react-jss'
import style from './styles'

type AutocompleteProps = {
  classes: any,
  options: string[],
}

const Autocomplete: FC<AutocompleteProps> = ({ classes, options = [] }): ReactElement =>  {
    const [value, setValue] = useState('');
    const [currentItem, setCurrentItem] = useState(-1);
    const filteredOptions = options.length ? options.filter(option=> option.toLowerCase().startsWith(value.toLowerCase())) : [] 

    const handleKeyDown = (e: any) => {
        if(!!filteredOptions.length && value){
            if (e.keyCode === 38 && currentItem > 0) {
                setCurrentItem(currentItem - 1)
            } else if (e.keyCode === 40 && currentItem < filteredOptions.length - 1) {
                setCurrentItem(currentItem + 1)
            }
        }else{
            setCurrentItem(-1) 
        }
        if(e.keyCode === 13 && currentItem > -1){
            setValue(filteredOptions[currentItem])
        }
      }

    const handleOptionClick = (option: string) => {
        setValue(option)
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.inputBox}>
                    <input
                    className={classes.input}
                    type="text"
                    value={value}
                    placeholder='Name'
                    onChange={e => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                </div>
                {value && 
                    <div className={classes.options}>
                        {!!filteredOptions.length ? (
                            filteredOptions.map((option, index) => (
                                <div id={`item-${index}`}
                                    key={option}
                                    className={currentItem === index ? classes.active : ''}
                                    onClick={()=>handleOptionClick(option)}
                                    onKeyPress={()=>handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))
                        ) : (
                            <div className={classes.notFound}>No Match Found!</div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
  };
  
export default injectSheet(style)(Autocomplete)