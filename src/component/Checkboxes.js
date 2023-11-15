import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../theme/Theme';
import CheckBox from 'react-native-check-box';

export default function Checkboxes() {
  const [isChecked, setisChecked] = useState({
    Neapolitan: false,
    Sicilian: false,
    Chicago: false,
    California: false,
    NewYorkStyle: false,
    Greek: false,
    Detroit: false,
    StLouis: false,
  });

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.Neapolitan}
            onClick={() =>
              setisChecked({...isChecked, Neapolitan: !isChecked.Neapolitan})
            }
            rightText={'Neapolitan'}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.Sicilian}
            onClick={() =>
              setisChecked({...isChecked, Sicilian: !isChecked.Sicilian})
            }
            rightText={' Sicilian'}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.Chicago}
            onClick={() =>
              setisChecked({...isChecked, Chicago: !isChecked.Chicago})
            }
            rightText={'Chicago'}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.California}
            onClick={() =>
              setisChecked({...isChecked, California: !isChecked.California})
            }
            rightText={'California '}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.NewYorkStyle}
            onClick={() =>
              setisChecked({
                ...isChecked,
                NewYorkStyle: !isChecked.NewYorkStyle,
              })
            }
            rightText={'NewYorkStyle'}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.Greek}
            onClick={() =>
              setisChecked({...isChecked, Greek: !isChecked.Greek})
            }
            rightText={'Greek '}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.Detroit}
            onClick={() =>
              setisChecked({...isChecked, Detroit: !isChecked.Detroit})
            }
            rightText={'Detroit'}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
        <View style={{width: '50%'}}>
          <CheckBox
            isChecked={isChecked.StLouis}
            onClick={() =>
              setisChecked({...isChecked, StLouis: !isChecked.StLouis})
            }
            rightText={'StLouis '}
            rightTextStyle={{
              fontSize: 19,
              fontWeight: '400',
              color: appColors.textGrayBlue,
            }}
            checkBoxColor={appColors.LightGreen}
            checkedCheckBoxColor={appColors.LightGreen}
          />
        </View>
      </View>
    </View>
  );
}
