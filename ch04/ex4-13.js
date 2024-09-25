// 기초적인 구독 추가하기

const unsubscribe = store.subscribe(() => {
  console.log('store is updated');
});