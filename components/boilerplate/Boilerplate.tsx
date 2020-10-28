import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IStore } from 'interfaces/reducerInterfaces';
import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../reducers/server/boilerplateReducer';

const { useEffect } = React;

interface IBoilerplateProps{
  fetch: () => void,
  data: string[]
}
function Boilerplate(props: IBoilerplateProps) {
  const { fetch,  data } = props;

  useEffect(()=>{
    fetch();
  },[fetch]);

  return (
    <div>
      <p>boilerplate</p>
      {data && data.map((item:string)=>{
        return <p key={item}>-- {item}</p>
      })}
    </div>
  );
}

const mapStateToProps = ({boilerplate}: IStore) => ({
  data: boilerplate?.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  updateStore: (payload:IBoilerplateProps) => dispatch(actions.update(payload)),
  fetch: () => dispatch(actions.fetchSaga()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boilerplate);
