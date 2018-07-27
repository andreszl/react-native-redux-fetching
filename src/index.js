import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'

class Index extends Component{
    
   componentWillMount(){
       
       this.props.fetchData()
   }

   getData(){
       const {data} = this.props.data
       return dt = data.map((d, key ) => {
           return <Text key={key}>{d.show.name}</Text>
       })
   }

    render(){
       
        return (
            <View>

               {console.log(this.props.data.isFetching)}
               {
                   this.props.data.data.length ?
                        this.getData()
                        : null
               }
            </View>
        )
    }
}


function mapStateToProps(state){
    // console.log(state.fetchReducer)
    return {
        
        data: state.fetchReducer
    }
}



function mapDispatchToProps(dispatch){
    return {
        fetchData: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)