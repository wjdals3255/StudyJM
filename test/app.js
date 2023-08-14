// 채우기
/**
 * @key number
 * @title string // 광주, 서울, 부산
 */
const citis = [
  // 채우기
]
/**
 * @Booking-key number
 * @type string
 * @ymd string
 * @city object - title
 * @car object - type, price
 * @user object - name, phone, email
 */
const bookings = []

/**
 * 1. 차량 검색
 * 2. 파라미터 : { type: 'PICKUP' | 'SENDING', ymd: 'YYYY-MM-DD', city: number }
 * 3. 결과 값 : {
 *    key: number
 *    type: string // 차종 ex) 그랜져, 아반떼, 산타페
 *    price: number
 *  }
 */
async function search(data) {
  // ... API 수행 한것 처럼 채우기
}
// 채우기
/**
 * 1. 예약
 * 2. 파라미터 : { type, ymd, city, carKey, name, phone, email }
 * 3. 결과 값 : {
 *    key: number
 *    mode: boolean // 예약 성공 여부 
 *  }
 */
async function booking(data) {
  // ... API 수행 한것 처럼 채우기
}

function orders() {
  console.log(bookings)
}


const keyword = {
  // 채우기
}


// 고정 
const car = await search(keyword)
const booking = await booking(keyword, car)

if(booking.mode) {
  orders()
}

