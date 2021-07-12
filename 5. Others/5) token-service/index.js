/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  token = [];
  subscribers = [];
  setToken(token){
      this.token = token;
      this.subscribers.forEach(acc => acc(this.token));
  }
  subscribe(account){
      this.subscribers.push(account);
  }
  removeToken(){
      this.token = null;
      this.subscribers.forEach(acc => acc(this.token));
  }
  getToken(){
      return this.token;
  }
}

window.TokenService = TokenService;

export default TokenService;
