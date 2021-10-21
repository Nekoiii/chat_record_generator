import React, { Component, useState, useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import words_obj from './words';

import './ChatRecordPage.scss';

interface chatRecords {
  char: number;
  words: string;
}

const ChatRecordPage = (props: any) => {
  const initState = {};
  const [state, setState] = useState<any>(initState);

  useEffect(() => {}, []);

  /*
  char: 0:♀-猫草, 1:♀-被盗当事人, 2:♂-爱凑热闹,说话比较幼稚, 3:♂-程序员,理性派,
   4:♂-东北大哥,曾被骗过,容易冲动, 5:偶尔出现的群友, 6:偶尔出现的群友
  */
  const split_words_1 = words_obj.words_1.split('$');
  const chatRecords_1: chatRecords[] = [];
  split_words_1.map(it => {
    const [char, words] = it.split('#');
    char &&
      words &&
      chatRecords_1.push({
        char: Number(char),
        words: words,
      });
  });

  /*
  char: 0:♀-被盗当事人, 1:♀-土豪朋友
  */

  return (
    <div className={'chat_record_page '.concat(props.className)}>
      <div className='word_list'>
        {chatRecords_1.map(it => {
          return (
            <div className='word_item'>
              {/* <div>{it.char}</div> */}
              <img src={require('../../resources/icons/a.png').default} />
              <div className='words'>{it.words}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
ChatRecordPage.defaultProps = {};
export default ChatRecordPage;
