
import './style.css'
export default function User({user}){
  const {avatar_url, followers,following, 
public_repos, name, login,url,
created_at} = user ||{};

const createdDate = new Date(created_at);
console.log(createdDate);//
return(
    <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt="user" />
        </div>
        <div className='name_container'>
            <a href={`https://github.com/${login}`}>{name|| login} </a>
            <p>  User Joined on  {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {month: 'short'})}  ${createdDate.getFullYear()}`}</p>
        </div>

        <div className='profile_stats'>
            <div>
                <p>Public repos</p>
                <p>{public_repos}</p>
            </div>
            <div>
                <p>Followers</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Following</p>
                <p>{following}</p>
            </div>
        </div>
    </div>
)
}