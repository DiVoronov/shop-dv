import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { StyledWrapperForItemsLists } from './WrapperForItemsLists.style';
import { ItemCard } from '../ItemCard/ItemCard';
import { IProductsObject } from '../../../app/api/shop.types';
import { RadioPanel } from './RadioPanel';
import { CheckboxPanel } from './CheckBox';

interface IWrapperForItemsListsProps {
  itemsList: IProductsObject[]
  categories?: any[]
  sortPoints?: any[]
};

export const WrapperForItemsLists: React.FC<IWrapperForItemsListsProps> = ({ itemsList, categories, sortPoints }) => {

  const [ itemsListForRendering, setItemsListForRendering ] = useState(itemsList);
  const [ categoriesList, setCategoriesList ] = useState<string[]>(['Show all']);
  const [ listOfChosenCategories, setListOfChosenCategories ] = useState<string[]>([]);
  const [ temporaryListOfItems, setTemporaryListOfItems ] = useState<IProductsObject[]>([]);
  const [ isShowAll, setIsShowAll ] = useState(true);

  useEffect( () => {
    itemsList.map( item => {
      if (categoriesList.find( category => category === item.category) === undefined) {
        const newArray = categoriesList;
        newArray.push(item.category);
        setCategoriesList(newArray);
        console.log(categoriesList)
      };
    });

    setTemporaryListOfItems(itemsList);
    setItemsListForRendering(itemsList);
    setItemsListForRendering([]);

  }, [itemsList]);

  useEffect( () => {
    setListOfChosenCategories(categoriesList);
  }, [categoriesList]);

  const clothing = itemsList.filter( (element: IProductsObject) => element.category === "men's clothing" || element.category === "women's clothing");
  const mansClothes = itemsList.filter( (element: IProductsObject) => element.category === "men's clothing");
  const womansClothes = itemsList.filter( (element: IProductsObject) => element.category === "women's clothing");
  const electronics = itemsList.filter( (element: IProductsObject) => element.category === "electronics");
  const jewelry = itemsList.filter( (element: IProductsObject) => element.category === "jewelery");


  // const handleAddRemoveClothes = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
  //   if (!e.currentTarget.checked) {
  //     setItemsListForRendering(itemsList.filter( item => (item.category !==  "men's clothing") && (item.category !== "women's clothing")));
  //   } else {
  //     setItemsListForRendering(itemsListForRendering.concat(...clothing));
  //   };
  // };
  const handleAddRemoveAllItems = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    // console.log(e.currentTarget.classList)
    // console.log(e.currentTarget.checked)
    // console.log(e.currentTarget.checked)
    // console.log(e.currentTarget.classList.contains('Mui-checked'))

    // itemsList
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setIsShowAll(true);
      // console.log('itemsListForRendering', itemsListForRendering)
      // setTemporaryListOfItems(itemsListForRendering);
      // setItemsListForRendering(itemsList);
    } else {
      setIsShowAll(false);
      // setItemsListForRendering(temporaryListOfItems);
    };
  };

  const handleAddRemoveMenClothes = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category ===  "men's clothing")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !==  "men's clothing"))      
    };
  };

  const handleAddRemoveWomenClothes = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "women's clothing")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !== "women's clothing"));
    };
  };

  const handleAddRemoveElectronics = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "electronics")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter( item => item.category !== "electronics"));
    };
  };

  const handleAddRemoveJewelry = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    setIsShowAll(false);
    if (!e.currentTarget.classList.contains('Mui-checked')) {
      setItemsListForRendering(itemsListForRendering.concat(itemsList.filter( item => item.category === "jewelery")));
    } else {
      setItemsListForRendering(itemsListForRendering.filter(item => item.category !== "jewelery"));
    };
  };

  const chooseCategory = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, category: string) => {
    if (category === "women's clothing") {
      return handleAddRemoveWomenClothes(e);
    } else if (category === "men's clothing") {
      return handleAddRemoveMenClothes(e);
    } else if (category === 'jewelery') {
      return handleAddRemoveJewelry(e);
    } else if (category === 'electronics') {
      return handleAddRemoveElectronics(e);
    } else if (category === 'Show all') {
      return handleAddRemoveAllItems(e)
    };
  };

  const sortOptions = [
    'Від меншої ціни',
    'Від більшої ціни',
    'За популярністю',
    'За номером'
  ];

  const sortByPriceIncrease = (a: IProductsObject, b: IProductsObject) => {
    if (a.price > b.price) { return 1 } else
    if (a.price < b.price) { return -1 } else return 0;
  };
  const sortByPriceDecrease = (a: IProductsObject, b: IProductsObject) => {
    if (a.price < b.price) { console.log(a.price, b.price); return 1 } else
    if (a.price > b.price) { return -1 } else return 0;
  };
  const sortByPopular = (a: IProductsObject, b: IProductsObject) => {
    if (a.rating.count > b.rating.count) { return 1 } else
    if (a.rating.count < b.rating.count) { return -1 } else return 0;
  };
  const sortByArticle = (a: IProductsObject, b: IProductsObject) => {
    if (a.id > b.id) { return 1 } else
    if (a.id < b.id) { return -1 } else return 0;
  };

  const handleSort = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, radioOptions: string) => {
    // if (!e.currentTarget.classList.contains('Mui-checked')) {
    const itemsListForRenderingCopy = [...itemsListForRendering];
    const temporaryListOfItemsCopy = [...temporaryListOfItems];

    if (radioOptions === 'Від меншої ціни') {
      const arrayPriceIncreaseSort = itemsListForRenderingCopy.sort(sortByPriceIncrease);
      console.log(temporaryListOfItems);
      const arrayPriceIncreaseSortTEMP = temporaryListOfItemsCopy.sort(sortByPriceIncrease);
      setItemsListForRendering(arrayPriceIncreaseSort);
      setTemporaryListOfItems(arrayPriceIncreaseSortTEMP);
    } else if (radioOptions === 'Від більшої ціни') {
      const arrayPriceDecreaseSort = itemsListForRenderingCopy.sort(sortByPriceDecrease);
      const arrayPriceDecreaseSortTEMP = temporaryListOfItemsCopy.sort(sortByPriceDecrease);
      setItemsListForRendering(arrayPriceDecreaseSort);
      setTemporaryListOfItems(arrayPriceDecreaseSortTEMP);
    } else if (radioOptions === 'За популярністю') {
      const arrayPopularSort = itemsListForRenderingCopy.sort(sortByPopular);
      const arrayPopularSortTEMP = temporaryListOfItemsCopy.sort(sortByPopular);
      setItemsListForRendering(arrayPopularSort);
      setTemporaryListOfItems(arrayPopularSortTEMP);
    } else if (radioOptions === 'За номером') {
      const arrayArticleSort = itemsListForRenderingCopy.sort(sortByArticle);
      const arrayArticleSortTEMP = temporaryListOfItemsCopy.sort(sortByArticle);
      setItemsListForRendering(arrayArticleSort);
      setTemporaryListOfItems(arrayArticleSortTEMP);
    };
    /*
    console.log('handleSort', radioOptions, itemsListForRendering)
    switch (radioOptions) {
      case 'Від меншої ціни':
        const copyArrayPriceIncrease = itemsListForRendering.sort(sortByPriceIncrease);
        // const copyArrayPriceIncreaseTemp = temporaryListOfItems.sort(sortByPriceIncrease);

        const tempInc = itemsListForRendering;
        const getTempInc = tempInc.sort((a, b) => {
          if (a.price > b.price) { return 1 } else
          if (a.price < b.price) { return -1 } else return 0;
        })
        setItemsListForRendering(getTempInc);
        // setItemsListForRendering(copyArrayPriceIncrease);
        // setTemporaryListOfItems(copyArrayPriceIncreaseTemp);
        break;
      case 'Від більшої ціни':
        const copyArrayPriceDecrease = itemsListForRendering.sort(sortByPriceDecrease);
        // const copyArrayPriceDecreaseTemp = temporaryListOfItems.sort(sortByPriceDecrease);
        
        const tempDec = itemsListForRendering;
        const getTempDec = tempDec.sort((a, b) => {
          if (a.price < b.price) { return 1 } else
          if (a.price > b.price) { return -1 } else return 0;
        })
        setItemsListForRendering(getTempDec);

        // setItemsListForRendering(copyArrayPriceDecrease);
        // setTemporaryListOfItems(copyArrayPriceDecreaseTemp);
        break;
      case 'За популярністю':
        const copyArrayPopular = itemsListForRendering.sort(sortByPopular);
        const copyArrayPopularTemp = temporaryListOfItems.sort(sortByPopular);

        setItemsListForRendering(copyArrayPopular);
        setTemporaryListOfItems(copyArrayPopularTemp);
        break;
      case 'За номером':
        const copyArrayArticle = itemsListForRendering.sort(sortByArticle);
        const copyArrayArticleTemp = temporaryListOfItems.sort(sortByArticle);

        setItemsListForRendering(copyArrayArticle);
        setTemporaryListOfItems(copyArrayArticleTemp);
        break;
    };
  // };
  */
  };

  return (
    <StyledWrapperForItemsLists>
      <Box component='div' className='sort-filter-menu-box'>
        <Box component='div' className='sort-menu-box'>
          {/* <Box component='div' className='filter-menu-box-header'>Sort by:</Box> */}
          <RadioPanel radioOptions={sortOptions} handleSort={handleSort}/>
          {/* <form>
            <fieldset>
              <legend></legend>
              {
                sortOptions.map( (option, index) => {
                  return (
                    <Box key={index} component='div' className='filer-sort-options'>
                      <label>{option}</label>
                      <input type='radio' id={`radio-${index}`} name={option} value={option}/>
                    </Box>
                    
                  );
                })
              }
            </fieldset>
          </form> */}
        </Box>
        <Box component='div' className='filter-menu-box'>
          <Box component='div' className='filter-menu-box-header'>Filters:</Box>
          <CheckboxPanel checkboxOptions={categoriesList} chooseCategoryFn={chooseCategory}/>
          {/* {
            categoriesList!.map( (category, index) => {
              return (
                <Box key={index} component='div' className='filer-sort-options'>
                  <label>{category}</label>
                  <input type='checkbox' onClick={(e) => chooseCategory(e, category)}/>
                </Box>
              );
            })
          } */}
        </Box> 
      </Box>
      <Box component='div' className='items-list-menu-box'>
        {
          isShowAll
          ?
          <>
          {
            temporaryListOfItems.map( (item, index) => {
              return (
                <ItemCard key={index} item={item}/>
              );
            })
          }
          </>
          :
          <>
          {
            itemsListForRendering.map( (item, index) => {
              return (
                <ItemCard key={index} item={item}/>
              );
            })
          }
          </>
        }
      </Box>
    </StyledWrapperForItemsLists>
  );
};