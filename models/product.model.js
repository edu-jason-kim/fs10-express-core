// Prisma, Mongodb 연동 로직, 데이터 스키마 정의
// 아래는 실제 DB 연동했다고 가정한 예시

const products = [
  { id: 1, name: "Keyboard", price: 20000 },
  { id: 2, name: "Mouse", price: 15000 },
];

// Model은 데이터를 접근하는 레이어
export default {
  findAll() {
    return products;
  },
};
