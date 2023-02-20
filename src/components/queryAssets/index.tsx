import React, { useEffect, useState } from 'react'
import { AssetsModule, Catalog, DDO } from '@nevermined-io/catalog'
import { UiForm, UiFormInput, UiText, UiLayout, UiFormSelect, UiButton, BEM } from '@nevermined-io/styles'
import { appConfig } from '../config'
import styles from './styles.module.scss'

const b = BEM('query-assets', styles)

interface SearchAssets {
  name?: boolean
  additionalInformation?: boolean
  priceRange?: boolean
  filters?: boolean
  complexSort: boolean
}

const QuerySearchByName = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([])

  const onSearchByName = async(value: string) => {
    if(value.length < 3) {
      setDdos([])
      return
    }

    const response = await assetsModule.query({
      query: {
        bool: {
          must: [{
            nested: {
              path: ['service'],
              query: {
                "query_string": {
                  query: `*${value}*`,
                  fields: ["service.attributes.main.name"]
                }
              },
            }
          }
          ]
        }
      }
    })

    setDdos(response.results || [])
  }

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with NFT)'
          onChange={(e) => onSearchByName(e.target.value)}/>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}

const QuerySearchByAdditionalInfo = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([])
  const [category, setCategory] = useState('')

  const options = [{
    label: 'Categories:',
    value: ''
  }, {
    label: 'Lending',
    value: 'ProtocolType:Lending',
  }, {
    label: 'Ethereum',
    value: 'Blockchain:Ethereum',
  }, {
    label: 'Liquidations',
    value: 'EventType:Liquidations',
  }]

  const onSearchByCategory = async(value: string) => {
    const categoryChoosen = options.find(o => o.label === value)?.value
    setCategory(value)

    if(!categoryChoosen) {
      setDdos([])
      return
    }

    const response = await assetsModule.query({
      query: {
        nested: {
          path: ['service'],
          query: {
            match: {
              "service.attributes.additionalInformation.categories": categoryChoosen
            }
          }
        }
      },
    })

    setDdos(response.results || [])
  }

  return (
    <>
      <UiForm>
        <UiFormSelect
          label='Search by category: '
          value={category}
          options={options.map(o => o.label)}
          onChange={(e) => onSearchByCategory(e as string)}/>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>

        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
        
      )}
    </>
  )
}

const QuerySearchByPriceRange = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([])
  const [ gte, setGte ] = useState(0)
  const [ lte, setLte ] = useState(100)
  const [ gteRequired, setGteRequired ] = useState('')
  const [ lteRequired, setLteRequired ] = useState('')

  useEffect(() => {
    if(gteRequired || lteRequired) {
      setTimeout(() => {
        setGteRequired('')
        setLteRequired('')
      }, 3000)
    }
  }, [gteRequired, lteRequired])

  const getValue = (value: string) => {
    if(value) {
      return parseFloat(value)
    }
  
    return value as undefined
  }

  const onSearchByPriceRange = async() => {
    if((!gte && gte !==0 ) || (!lte && lte !==0 )) {
      setGteRequired(!gte ? 'gte input is required' : '')
      setLteRequired(!lte ? 'lte input is required' : '')
      setDdos([])

      return
    }

    if(gte > lte) {
      setGteRequired('gte input cannot be greater than lte input')
      setDdos([])

      return
    }

    if(gte < 0) {
      setGteRequired('gte input cannot be less than 0')
      setDdos([])

      return
    } 

    const response = await assetsModule.query({
      query: {
        nested: {
          path: ['service'],
          query: {
            range: {
              "service.attributes.additionalInformation.priceHighestDenomination": {
                gte,
                lte
              }
            }
          }
        }
      }
    })

    setDdos(response.results || [])
  }

  return (
    <>
      <UiForm>
        <UiText>Set the price range:</UiText>
        <UiFormInput 
          label='gte: '
          value={gte}
          type='number'
          onChange={(e) => setGte(getValue(e.target.value))}
          inputError={gteRequired}/>
        <UiFormInput 
          label='lte: '
          value={lte}
          type='number'
          onChange={(e) => setLte(getValue(e.target.value))}
          inputError={lteRequired}/>
        
        <UiButton title='Search' type='secondary' onClick={onSearchByPriceRange}>Search</UiButton>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Price: </UiText>
            <UiText>{ddo.service[0].attributes.main.price }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}

const QuerySearchByFilters = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([])
  const [ name, setName ] = useState('')
  const [ short, setShort] = useState<'asc'|'desc'>('desc')
  const [ page, setPage ] = useState(1)
  const [ size, setSize ] = useState(100)
  const [ nameRequired, setNameRequired ] = useState('')
  const [ pageRequired, setPageRequired ] = useState('')
  const [ sizeRequired, setSizeRequired ] = useState('')

  useEffect(() => {
    if(nameRequired || pageRequired || sizeRequired) {
      setTimeout(() => {
        setNameRequired('')
        setPageRequired('')
        setSizeRequired('')
      }, 3000)
    }
  }, [nameRequired, pageRequired, sizeRequired])

  const getValue = (value: string) => {
    if(value) {
      return parseInt(value, 10)
    }
  
    return value as undefined
  }

  const setMessage = (name: string, value: number) => {
    return value <= 0 ? `${name} input needs to be greater than 0` : `${name} input is required`
  }

  const onSearchByFilters = async() => {
    if(!page || !size || !name) {
      setNameRequired(!name ? 'name input is required' : '')
      setPageRequired(!page || page <= 0 ? setMessage('page', page): '')
      setSizeRequired(!size || size <= 0 ? setMessage('size', size): '')
      setDdos([])

      return
    }

    const response = await assetsModule.query({
      query: {
        bool: {
          must: [{
            nested: {
              path: ['service'],
              query: {
                "query_string": {
                  query: `*${name}*`,
                  fields: ["service.attributes.main.name"]
                },
              },
            }
          }]
        }
      },
      offset: size,
      page,
      sort: {
        created: short
      }
    })

    setDdos(response.results || [])
  } 

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with NFT)'
          inputError={nameRequired}
          onChange={(e) => setName(e.target.value)}/>
        <UiFormInput 
          label='Page:'
          type='number'
          value={page}
          inputError={pageRequired}
          onChange={(e) => setPage(getValue(e.target.value))}/>
        <UiFormInput 
          label='Page size:'
          value={size}
          type='number'
          inputError={sizeRequired}
          onChange={(e) => setSize(getValue(e.target.value))}/>
        <UiFormSelect
          label='Short by publish date:'
          value={short}
          options={['asc', 'desc']}
          onChange={(e) => setShort(e)}
        />
        <UiButton title='Search' type='secondary' onClick={onSearchByFilters}>Search</UiButton>
      </UiForm>

      {ddos.map(ddo =>
        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}

const QuerySearchSortByPrice = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const [ ddos, setDdos ] = useState<DDO[]>([])

  useEffect(() => {
    onSearch({})
  }, [])

  const onSearch = async(query: unknown) => {
    const response = await assetsModule.query(query)

    setDdos(response.results || [])
  }

  return (
    <>
      <UiForm>
        <UiButton title='Search' type='secondary' onClick={() => onSearch({
          sort: [
            {
              'service.attributes.additionalInformation.priceHighestDenomination': {
                order: 'asc',
                nested: {
                  path: 'service'
                }
              }
            }
          ]
        })}>Sort</UiButton>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>

        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Price: </UiText>
            <UiText>{ ddo.service[2].attributes.additionalInformation.priceHighestDenomination }</UiText>
          </UiLayout>
        </UiLayout>
        
      )}
    </>
  )
}

const QuerySearch = (searchAssets: SearchAssets) => {
  const { assets, isLoadingSDK } = Catalog.useNevermined()

  return (
    <div className={b('container')}>
      {!isLoadingSDK && (
        <>
          {searchAssets.name && <QuerySearchByName assetsModule={assets}/>}
          {searchAssets.additionalInformation && <QuerySearchByAdditionalInfo assetsModule={assets}/>}
          {searchAssets.priceRange && <QuerySearchByPriceRange assetsModule={assets}/>}
          {searchAssets.filters && <QuerySearchByFilters assetsModule={assets}/>}
          {searchAssets.complexSort && <QuerySearchSortByPrice assetsModule={assets}/>}
        </>
      )}
    </div>
  )
}

const QueryAssets = (searchAssets: SearchAssets ) => {
  const config = appConfig()

  return(
    <Catalog.NeverminedProvider config={config} verbose={true}>
      <QuerySearch 
        name={searchAssets.name}
        additionalInformation={searchAssets.additionalInformation}  
        priceRange={searchAssets.priceRange}
        filters={searchAssets.filters}
        complexSort={searchAssets.complexSort}
      />
    </Catalog.NeverminedProvider>
  )
}

export default QueryAssets