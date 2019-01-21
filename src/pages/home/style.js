import styled from 'styled-components'


export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width:625px;
  float:left;
  margin-left:15px;
  padding-top:30px;
  .banner-img {
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width:280px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float:left;
  padding-right:10px;
  margin-left:18px;
  margin-bottom:18px;
  cursor:pointer;
  background:#f7f7f7;
  height:32px;
  line-height:32px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic {
    height:32px;
    width:32px;
    display:block;
    float:left;
    margin-right:10px;
  }
`
export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  cursor:pointer;
  .pic {
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title {
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
    &:hover {
      text-decoration: underline;
    }
  }
  .desc {
    line-height:24px;
    color:#999;
    font-size:13px;
  }
`
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;
`
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${props => props.imgUrl}); // 一个styled-components语法
  background-size:cover;
  cursor:pointer;
  margin-bottom:5px;
`
export const WriterWrapper = styled.div`
  width:278px;
  border:1px solid #dcdcdc;
  border-radius:3px;
  height:300px;
  line-height:300px;
  text-align:center;
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`
export const BackTop = styled.div`
  position:fixed;
  right:30px;
  bottom:30px;
  width:60px;
  line-height:60px;
  height:60px;
  text-align:center;
  border: 1px solid #dcdcdc;
  font-size:14px;
  cursor:pointer;
`