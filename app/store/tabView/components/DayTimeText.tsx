//<DayTimeText day="monday" time="08:00 ~ 21:00" />
import Text from '@/components/Text/Text';
type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type DayTime = {
  day: Day;
  time: string;
};

//영어 요일 한국말로 바꾸는 함수
function getKoreanDay(day: Day): string {
  switch (day) {
    case 'monday':
      return '월';
    case 'tuesday':
      return '화';
    case 'wednesday':
      return '수';
    case 'thursday':
      return '목';
    case 'friday':
      return '금';
    case 'saturday':
      return '토';
    case 'sunday':
      return '일';
    default:
      return '';
  }
}

const DayTimeText = ({ day, time }: DayTime) => {
  return (
    <div className="w-full flex min-w-[120px] max-w-[300px]">
      <Text fontWeight="medium" color="black" size="xs">
        {getKoreanDay(day)}
      </Text>
      <div className="w-1"></div>
      <Text fontWeight="medium" color="black" size="xs">
        {time}
      </Text>
    </div>
  );
};

export default DayTimeText;
