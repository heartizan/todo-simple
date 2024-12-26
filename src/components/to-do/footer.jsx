import '../../assets/styles/footer.scss'

export default{
  data(){
    return{
      author:'Artizan'
    }
  },
  render(){
    return(
      <div id="footer">
        <span>由{this.author}创造</span>
      </div>
    )
  }
}