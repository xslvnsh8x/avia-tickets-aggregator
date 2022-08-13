// сам билет, включает в себя остальные сущности
export interface TicketDto {
  id: string;
  // Цена в рублях
  price: number;
  // идентификатор компании которая осуществляет перевозку
  companyId: string;
  // Массив идентификаторов перелётов
  info: {
    // Код города откуда вылет
    origin: CityCodes;
    // Код города куда летим
    destination: CityCodes;
    // Дата и время вылета в unix времени
    dateStart: string;
    // Дата и время прибытия в unix времени
    dateEnd: string;
    // Массив кодов городов с пересадками
    stops: CityCodes[];
    // Длительность полета в миллисекундах
    duration: number;
  };
}

// компания
export interface CompanyDto {
  id: string;
  // Название компании
  name: string;
  // Имя логотипа
  // Т.к. картинки пока храниться будут у Вас локально - имя и путь к картинке можете замапить на те что будут у вас
  logo: string;
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
export type CityCodes = 'MOW' | 'HKT' | 'HKG' | 'JNB' | 'PTB' | 'ARH' | 'TRN' | 'KRS' | 'SRT' | 'LOS' | 'EKV' | 'EKT';
