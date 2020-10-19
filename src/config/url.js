// 定义电影列表需要的地址 
export const nowPlayingListUri =
    "gateway?cityId=110100&pageSize=10&type=1&k=5230130&pageNum="; //正在热映

// 
export const comingSoonListUri =
    "gateway?cityId=110100&pageSize=10&type=2&k=7957247&pageNum="; //即将上映

export const moiveDetailUrl = "gateway?k=24335&filmId=";           //详情页
                                        
// 定义影院地址
export const cinemaListUrl =
    "gateway?cityId=110100&ticketFlag=1&k=6599323"                  //影院

// 城市地址列表地址
export const cityListUrl = "gateway?k=5859191"

// 用户登录信息地址
export const loginUrl = "http://127.0.0.1:3000/api/v1/longin"
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info"
    

// 有其他的请求地址再添加
